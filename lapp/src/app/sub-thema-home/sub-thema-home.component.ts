import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AufgabenDataService } from '../shared/aufgaben-data.service'
import { Aufgabe, Theorie } from '../shared/interface/thema';
import { TheorieDataService } from '../shared/theorie-data.service'

@Component({
  selector: 'app-sub-thema-home',
  templateUrl: './sub-thema-home.component.html',
  styleUrls: ['./sub-thema-home.component.css']
})
export class SubThemaHomeComponent {

  public subThema: number = 0;
  public aufgaben?: Aufgabe[];
  public theorien?: Theorie[];

  constructor(private route: ActivatedRoute, private ads: AufgabenDataService, private tds: TheorieDataService){}

  ngOnInit(){
    this.subThema = this.route.snapshot.params['id'];
    if (this.subThema != 0) {
      this.getAufgaben(); 
      this.getTheorie();
    }
  }
  getAufgaben(){
    this.aufgaben = this.ads.aufgabenInhalt.filter(e => e.parentId == this.subThema);
  }
  getTheorie(){
    this.theorien = this.tds.theorieInhalte.filter(e => e.parentId == this.subThema);
  }
}
