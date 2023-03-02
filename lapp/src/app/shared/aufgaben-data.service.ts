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
        parentId: 1,
        id: 1,
        titel: "Aufgabe1",
        inhalt: "Inhalt1"
      },
      {
        parentId: 2,
        id: 2,
        titel: "Aufgabe2",
        inhalt: "Inhalt2"
      },
      {
        parentId: 3,
        id: 3,
        titel: "Aufgabe3",
        inhalt: "Inhalt3"
      },
      {
        parentId: 4,
        id: 4,
        titel: "Aufgabe4",
        inhalt: "Inhalt4"
      },
      {
        parentId: 4,
        id: 5,
        titel: "Aufgabe5",
        inhalt: "Inhalt4"
      },
      {
        parentId: 5,
        id: 6,
        titel: "Aufgabe5",
        inhalt: "Inhalt5"
      },
      {
        parentId: 6,
        id: 7,
        titel: "Aufgabe6",
        inhalt: "Inhalt6"
      }
    ]
  }
}
