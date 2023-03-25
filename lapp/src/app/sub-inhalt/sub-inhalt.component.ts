import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { AufgabenDataService } from '../shared/aufgaben-data.service';
import { Aufgabe, Theorie } from '../shared/interface/thema';
import { TheorieDataService } from '../shared/theorie-data.service';

@Component({
  selector: 'app-sub-inhalt',
  templateUrl: './sub-inhalt.component.html',
  styleUrls: ['./sub-inhalt.component.css']
})
export class SubInhaltComponent {
  aufgabe?: Aufgabe
  theorie?: Theorie
  private _inhaltId: number = 0
  private _inhaltType: string = ""
  public formGroup: FormGroup
    
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

  constructor(private as: AufgabenDataService, private ts: TheorieDataService, private fb: FormBuilder){
    this.getInhalt()

    this.formGroup = fb.group({
      answer: this.fb.control('')
    })

    this.formGroup.valueChanges.subscribe((e)=>{
      this.validate(e.answer)
    })
  }

  validate(answer: string){
    console.log(answer)
    if (answer == this.aufgabe?.loesung) {
      console.log("geilomatico")
    }
  }

  getInhalt(){
    this.inhaltType == "theorie"? this.theorie = this.ts.theorieInhalte.filter(e => e.id == this.inhaltId)[0]
    : this.aufgabe = this.as.aufgabenInhalt.filter(e => e.id == this.inhaltId)[0]
  }
}
