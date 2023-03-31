import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AufgabenDataService } from '../shared/aufgaben-data.service'
import { Aufgabe, SubThema, Theorie } from '../shared/interface/thema';
import { SubThemaDataService } from '../shared/sub-thema-data.service';
import { TheorieDataService } from '../shared/theorie-data.service'

@Component({
  selector: 'app-sub-thema-home',
  host: {
    class: 'main'
  },
  templateUrl: './sub-thema-home.component.html',
  styleUrls: ['./sub-thema-home.component.css']
})
export class SubThemaHomeComponent {
  max: SubThema[] = [] // ein Array von Unterkapiteln

  public thema: number = 0 // die ID des Hauptkapitels
  public subThema: number = 0; // die ID des Unterkapitels
  public nextSubThema: number = 0; // die ID des nächsten Unterkapitels
  public aufgaben: Aufgabe[] = [] // ein Array von Aufgaben
  public theorien: Theorie[] = []; // ein Array von Theorien
  displayedColumns: string[] = ['titel'] // definiert die Spaltenüberschrift für die Tabelle

  type: string = '' // der Typ des Inhalts ("aufgabe" oder "theorie")
  inhaltId: number = 0 // die ID des Inhalts

  constructor(private route: ActivatedRoute, private ads: AufgabenDataService, private tds: TheorieDataService, private std: SubThemaDataService){
    route.params.subscribe(e => { // abonniert die Route-Parameter
      this.subThema = e['subId'] // liest die ID des Unterkapitels aus den Parametern
      this.subThema != 0 ? this.getContents() : console.log("Kein Sub-Thema gefunden") // ruft die Methode "getContents()" auf, wenn die ID nicht 0 ist
    })
  }

  // ruft die Inhalte des Unterkapitels ab
  getContents(){
    this.aufgaben = this.ads.aufgabenInhalt.filter(e => e.parentId == this.subThema) // filtert alle Aufgaben, die zum aktuellen Unterkapitel gehören
    this.theorien = this.tds.theorieInhalte.filter(e => e.parentId == this.subThema) // filtert alle Theorien, die zum aktuellen Unterkapitel gehören
    this.thema = this.std.subThemas.filter(e => e.id == this.subThema)[0].parentId // liest die ID des Hauptkapitels aus dem Unterkapitel
    this.max = this.std.subThemas.filter(e => e.parentId == this.thema) // liest alle Unterkapitel des Hauptkapitels aus der Datenquelle
  }

  // prüft, ob es ein vorheriges Unterkapitel gibt
  checkPrevious(): Boolean{
    let ret: Boolean = false
    for (let i of this.max) {
      i.id == Number(this.subThema)-1 ? ret = true : ret = false // prüft, ob die ID des aktuellen Unterkapitels minus 1 gleich der ID des aktuellen Unterkapitels ist
      if (ret) {
        break
      }
    }
    return ret
  }

  // Funktion zum Überprüfen, ob es ein nächstes Sub-Thema gibt
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
    // Inkrementierung des nächsten Sub-Themas
    this.nextSubThema++
    return ret
  }

  // Funktionen zum Setzen von inhaltId und type auf "aufgabe" bzw. "theorie"
  setAufgabe(id: number){
    this.inhaltId = id
    this.type = "aufgabe"
  }
  setTheorie(id: number){
    this.inhaltId = id
    this.type = "theorie"
  }
}
