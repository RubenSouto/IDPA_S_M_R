import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AufgabenDataService } from '../shared/aufgaben-data.service'
import { Aufgabe, SubThema, Theorie } from '../shared/interface/thema';
import { SubThemaDataService } from '../shared/sub-thema-data.service';
import { TheorieDataService } from '../shared/theorie-data.service'

@Component({
  selector: 'app-sub-thema-home',
  templateUrl: './sub-thema-home.component.html',
  styleUrls: ['./sub-thema-home.component.css']
})
export class SubThemaHomeComponent {
  max: SubThema[] = []

  public thema: number = 0
  public subThema: number = 0;
  public nextSubThema: number = 0;
  public aufgaben: Aufgabe[] = []
  public theorien: Theorie[] = [];
  displayedColumns: string[] = ['titel']

  type: string = ''
  inhaltId: number = 0

  constructor(private route: ActivatedRoute, private ads: AufgabenDataService, private tds: TheorieDataService, private std: SubThemaDataService){
    route.params.subscribe(e => {
      this.subThema = e['subId']
      this.subThema != 0 ? this.getContents() : console.log("Kein Sub-Thema gefunden")
    })
  }


  getContents(){
    this.aufgaben = this.ads.aufgabenInhalt.filter(e => e.parentId == this.subThema)
    this.theorien = this.tds.theorieInhalte.filter(e => e.parentId == this.subThema)
    this.thema = this.std.subThemas.filter(e => e.id == this.subThema)[0].parentId
    this.max = this.std.subThemas.filter(e => e.parentId == this.thema)
  }

  checkPrevious(): Boolean{
    let ret: Boolean = false
    for (let i of this.max) {
      i.id == Number(this.subThema)-1 ? ret = true : ret = false
      if (ret) {
        break
      }
    }
    return ret
  }

  checkNext(): Boolean{
    let ret: Boolean = false
    for (let i of this.max) {
      let temp = this.subThema
      i.id == Number(temp) + Number(1) ? ret = true : ret = false
      if (ret) {
        this.nextSubThema = this.subThema
        break
      }
    }
    this.nextSubThema++
    return ret
  }

  setAufgabe(id: number){
    this.inhaltId = id
    this.type = "aufgabe"
  }
  setTheorie(id: number){
    this.inhaltId = id
    this.type = "theorie"
  }
}
