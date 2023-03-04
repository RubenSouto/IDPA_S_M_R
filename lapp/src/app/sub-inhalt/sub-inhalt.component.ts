import { Component, Input } from '@angular/core';
import { AufgabenDataService } from '../shared/aufgaben-data.service';
import { Aufgabe, Thema } from '../shared/interface/thema';
import { TheorieDataService } from '../shared/theorie-data.service';

@Component({
  selector: 'app-sub-inhalt',
  templateUrl: './sub-inhalt.component.html',
  styleUrls: ['./sub-inhalt.component.css']
})
export class SubInhaltComponent {
  inhalt?: Aufgabe | Thema
  private _inhaltId: number = 0
  private _inhaltType: string = ""
    
  @Input() 
  set inhaltId(value: number) {
    this._inhaltId = value;
    this.getInhalt()
  }
  get inhaltId(): number {
    return this._inhaltId;
  }

  @Input() 
  set inhaltType(value: string){
    this._inhaltType = value
    this.getInhalt()
  }
  get inhaltType(): string {
    return this._inhaltType;
  }

  constructor(private as: AufgabenDataService, private ts: TheorieDataService){
    this.getInhalt()
  }

  getInhalt(){
    this.inhaltType == "theorie"? this.inhalt = this.ts.theorieInhalte.filter(e => e.id == this.inhaltId)[0]
    : this.inhalt = this.as.aufgabenInhalt.filter(e => e.id == this.inhaltId)[0]
  }
}
