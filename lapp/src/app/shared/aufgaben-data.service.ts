import { Injectable } from '@angular/core';
import { Aufgabe } from './interface/thema';

@Injectable({
  providedIn: 'root'
})
export class AufgabenDataService {

  public aufgabenInhalt: Aufgabe[];
  constructor() {
    this.aufgabenInhalt = [
      {
        parentId: 2,
        id: 1,
        titel: "Aufgabe zur Umrechnung: C -> K",
        inhalt: "Die Sonne hat eine Oberflächen Temperatur von ca. 6000 C<br>"+
        "Wie heiss ist die Oberfläche in Kelvin?",
        loesung: "6273.15"
      },
      {
        parentId: 2,
        id: 2,
        titel: "Aufgabe zur Umrechnung: C -> F",
        inhalt: "Nehmen sie nun, dass die Flamme eines Gasherdes 2912 F heiss ist<br>"+
        "Wie heiss ist die Flamme in Grad Celsius?",
        loesung: "1600"
      },
      {
        parentId: 4,
        id: 13,
        titel: "Aufgabe 1 zur Längenausdehnung",
        inhalt: "Es liegt, wieso auch immer, ein Glas-Massstab vor, dieser ist bei 0 C geeicht worden."+
        "Bei diesem lesen sie eine Strecken von 50 cm ab. Die Raumtemperatur beträgt dabei 20 C."+
        "Wie lang ist die eigentliche Strecke?",
        loesung: "50.01"
      },
      {
        parentId: 5,
        id: 14,
        titel: "Aufgabe 1 zur Flächenausdehnung",
        inhalt: "6",
        loesung: "1"
      },
      {
        parentId: 6,
        id: 15,
        titel: "Aufgabe 1 zur Volumenausdehnung",
        inhalt: "7",
        loesung: "1"
      },
    ]
  }
}
