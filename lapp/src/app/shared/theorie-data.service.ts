import { Injectable } from '@angular/core';
import { Theorie } from './interface/thema';

@Injectable({
  providedIn: 'root'
})
export class TheorieDataService {

  public theorieInhalte: Theorie[]
  constructor() {
    this.theorieInhalte = [
      {
        parentId: 1,
        titel: "Theorie1",
        inhalt: "Inhalt1"
      },
      {
        parentId: 2,
        titel: "Theorie2",
        inhalt: "Inhalt2"
      },
      {
        parentId: 3,
        titel: "Theorie3",
        inhalt: "Inhalt3"
      },
      {
        parentId: 4,
        titel: "Theorie4",
        inhalt: "Inhalt4"
      },
      {
        parentId: 4,
        titel: "Theorie4",
        inhalt: "Inhalt4"
      },
      {
        parentId: 5,
        titel: "Theorie5",
        inhalt: "Inhalt5"
      },
      {
        parentId: 6,
        titel: "Theorie6",
        inhalt: "Inhalt6"
      }
    ]
  }
}
