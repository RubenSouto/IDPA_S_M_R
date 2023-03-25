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
        titel: "1",
        inhalt: "1",
        loesung: "1"
      },
      {
        parentId: 1,
        id: 2,
        titel: "2",
        inhalt: "2",
        loesung: "1"
      },
      {
        parentId: 1,
        id: 3,
        titel: "3",
        inhalt: "3",
        loesung: "1"
      },
      {
        parentId: 1,
        id: 4,
        titel: "4",
        inhalt: "4",
        loesung: "1"
      },
      {
        parentId: 2,
        id: 5,
        titel: "5",
        inhalt: "5",
        loesung: "1"
      },
      {
        parentId: 2,
        id: 6,
        titel: "6",
        inhalt: "6",
        loesung: "1"
      },
      {
        parentId: 2,
        id: 7,
        titel: "7",
        inhalt: "7",
        loesung: "1"
      },
      {
        parentId: 2,
        id: 8,
        titel: "8",
        inhalt: "8",
        loesung: "1"
      },
      {
        parentId: 3,
        id: 9,
        titel: "5",
        inhalt: "5",
        loesung: "1"
      },
      {
        parentId: 3,
        id: 10,
        titel: "6",
        inhalt: "6",
        loesung: "1"
      },
      {
        parentId: 3,
        id: 11,
        titel: "7",
        inhalt: "7",
        loesung: "1"
      },
      {
        parentId: 3,
        id: 12,
        titel: "8",
        inhalt: "8",
        loesung: "1"
      },
      {
        parentId: 4,
        id: 13,
        titel: "5",
        inhalt: "5",
        loesung: "1"
      },
      {
        parentId: 4,
        id: 14,
        titel: "6",
        inhalt: "6",
        loesung: "1"
      },
      {
        parentId: 4,
        id: 15,
        titel: "7",
        inhalt: "7",
        loesung: "1"
      },
      {
        parentId: 4,
        id: 16,
        titel: "8",
        inhalt: "8",
        loesung: "1"
      },
      {
        parentId: 5,
        id: 17,
        titel: "5",
        inhalt: "5",
        loesung: "1"
      },
      {
        parentId: 5,
        id: 18,
        titel: "6",
        inhalt: "6",
        loesung: "1"
      },
      {
        parentId: 5,
        id: 19,
        titel: "7",
        inhalt: "7",
        loesung: "1"
      },
      {
        parentId: 5,
        id: 20,
        titel: "8",
        inhalt: "8",
        loesung: "1"
      },
      {
        parentId: 6,
        id: 21,
        titel: "5",
        inhalt: "5",
        loesung: "1"
      },
      {
        parentId: 6,
        id: 22,
        titel: "6",
        inhalt: "6",
        loesung: "1"
      },
      {
        parentId: 6,
        id: 23,
        titel: "7",
        inhalt: "7",
        loesung: "1"
      },
      {
        parentId: 6,
        id: 24,
        titel: "8",
        inhalt: "8",
        loesung: "1"
      },
      {
        parentId: 7,
        id: 25,
        titel: "5",
        inhalt: "5",
        loesung: "1"
      },
      {
        parentId: 7,
        id: 26,
        titel: "6",
        inhalt: "6",
        loesung: "1"
      },
      {
        parentId: 7,
        id: 27,
        titel: "7",
        inhalt: "7",
        loesung: "1"
      },
      {
        parentId: 7,
        id: 28,
        titel: "8",
        inhalt: "8",
        loesung: "1"
      },
      {
        parentId: 8,
        id: 29,
        titel: "5",
        inhalt: "5",
        loesung: "1"
      },
      {
        parentId: 8,
        id: 30,
        titel: "6",
        inhalt: "6",
        loesung: "1"
      },
      {
        parentId: 8,
        id: 31,
        titel: "7",
        inhalt: "7",
        loesung: "1"
      },
      {
        parentId: 8,
        id: 32,
        titel: "8",
        inhalt: "8",
        loesung: "1"
      },
      {
        parentId: 9,
        id: 33,
        titel: "5",
        inhalt: "5",
        loesung: "1"
      },
      {
        parentId: 9,
        id: 34,
        titel: "6",
        inhalt: "6",
        loesung: "1"
      },
      {
        parentId: 9,
        id: 35,
        titel: "7",
        inhalt: "7",
        loesung: "1"
      },
      {
        parentId: 9,
        id: 36,
        titel: "8",
        inhalt: "8",
        loesung: "1"
      },
      {
        parentId: 10,
        id: 37,
        titel: "5",
        inhalt: "5",
        loesung: "1"
      },
      {
        parentId: 10,
        id: 38,
        titel: "6",
        inhalt: "6",
        loesung: "1"
      },
      {
        parentId: 10,
        id: 39,
        titel: "7",
        inhalt: "7",
        loesung: "1"
      },
      {
        parentId: 10,
        id: 40,
        titel: "8",
        inhalt: "8",
        loesung: "1"
      },
      {
        parentId: 11,
        id: 41,
        titel: "5",
        inhalt: "5",
        loesung: "1"
      },
      {
        parentId: 11,
        id: 42,
        titel: "6",
        inhalt: "6",
        loesung: "1"
      },
      {
        parentId: 11,
        id: 43,
        titel: "7",
        inhalt: "7",
        loesung: "1"
      },
      {
        parentId: 11,
        id: 44,
        titel: "8",
        inhalt: "8",
        loesung: "1"
      },
      {
        parentId: 12,
        id: 45,
        titel: "5",
        inhalt: "5",
        loesung: "1"
      },
      {
        parentId: 12,
        id: 46,
        titel: "6",
        inhalt: "6",
        loesung: "1"
      },
      {
        parentId: 12,
        id: 47,
        titel: "7",
        inhalt: "7",
        loesung: "1"
      },
      {
        parentId: 12,
        id: 48,
        titel: "8",
        inhalt: "8",
        loesung: "1"
      },
      {
        parentId: 13,
        id: 49,
        titel: "5",
        inhalt: "5",
        loesung: "1"
      },
      {
        parentId: 13,
        id: 50,
        titel: "6",
        inhalt: "6",
        loesung: "1"
      },
      {
        parentId: 13,
        id: 51,
        titel: "7",
        inhalt: "7",
        loesung: "1"
      },
      {
        parentId: 13,
        id: 52,
        titel: "8",
        inhalt: "8",
        loesung: "1"
      },
      {
        parentId: 14,
        id: 53,
        titel: "5",
        inhalt: "5",
        loesung: "1"
      },
      {
        parentId: 14,
        id: 54,
        titel: "6",
        inhalt: "6",
        loesung: "1"
      },
      {
        parentId: 14,
        id: 55,
        titel: "7",
        inhalt: "7",
        loesung: "1"
      },
      {
        parentId: 14,
        id: 56,
        titel: "8",
        inhalt: "8",
        loesung: "1"
      },
    ]
  }
}
