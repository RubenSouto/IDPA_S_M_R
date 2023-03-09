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
        id: 1,
        titel: "Wahrnehmung von Temperatur",
        inhalt: 
        "Im Alltag sagen wir zu sachen warm/kalt je nach dem wie wir es empfinden. "+
        "Dies ist aber Subjektiv und nicht verlässlich, in der Physik machen wir damit Aussagen über die physikalische Grösse der Temperatur. "+
        "Dies ist ein objektives Mass dafür, wie warm ein Körper ist."
      },
      {
        parentId: 1,
        id: 2,
        titel: "Definition: Temperatur",
        inhalt: 
        "Die Temperatur gibt an, wie warm oder kalt ein Körper ist. "+
        "Sie ist ein Mass für die mittlere kinetische Energie pro Teilchen."
      },
      {
        parentId: 2,
        id: 3,
        titel: "Funktionsweise von Temperaturmessgeräte",
        inhalt: 
        "Viele dieser Geräte beruhen auf zwei Tatsachen: "+
        "1. Viele feste, flüssige und gasförmige Stoffe dehnen sich aus, wenn sie erwärmt werden. "+
        "2. Zwei verschieden Warme Gegenstände werden nach längerer Zeit die selbe Temperatur haben, die Körper sind dann im thermischen Gleichgewicht."
      },
      {
        parentId: 2,
        id: 4,
        titel: "Temperaturskala: Celsius",
        inhalt: "Der Schwede Anders Celsius schlug die Temperaturskala vor, die wir heute alle, ausser Amerikaner, kennen. "+
        "Schmelztemperatur von Eis = 0 C. "+
        "Siedetemperatur von Wasser (bei Normaldruck) = 100 C. "
      },
      {
        parentId: 2,
        id: 7,
        titel: "Temperaturskala: Kelvin",
        inhalt: "Die absolute Temperatur 'T' wird in Kelvin angegeben. "+
        "Der absolute Nullpunkt ist die tiefstmögliche Temperatur im Universum, wo es theoretisch gar keine Teilchenbewegungen mehr gibt. "+
        "Die Kelvin-Skala beginnt bei 0 K = -273.15 C und besitzt die gleiche Skalierung wie die Celsius-Skala."
        //Formel für die Umrechnung einfügen
      },
      {
        parentId: 2,
        id: 8,
        titel: "Temperaturskala: Fahrenheit",
        inhalt: "8"
      },
      {
        parentId: 3,
        id: 9,
        titel: "5",
        inhalt: "5"
      },
      {
        parentId: 3,
        id: 10,
        titel: "6",
        inhalt: "6"
      },
      {
        parentId: 3,
        id: 11,
        titel: "7",
        inhalt: "7"
      },
      {
        parentId: 3,
        id: 12,
        titel: "8",
        inhalt: "8"
      },
      {
        parentId: 4,
        id: 13,
        titel: "5",
        inhalt: "5"
      },
      {
        parentId: 4,
        id: 14,
        titel: "6",
        inhalt: "6"
      },
      {
        parentId: 4,
        id: 15,
        titel: "7",
        inhalt: "7"
      },
      {
        parentId: 4,
        id: 16,
        titel: "8",
        inhalt: "8"
      },
      {
        parentId: 5,
        id: 17,
        titel: "5",
        inhalt: "5"
      },
      {
        parentId: 5,
        id: 18,
        titel: "6",
        inhalt: "6"
      },
      {
        parentId: 5,
        id: 19,
        titel: "7",
        inhalt: "7"
      },
      {
        parentId: 5,
        id: 20,
        titel: "8",
        inhalt: "8"
      },
      {
        parentId: 6,
        id: 21,
        titel: "5",
        inhalt: "5"
      },
      {
        parentId: 6,
        id: 22,
        titel: "6",
        inhalt: "6"
      },
      {
        parentId: 6,
        id: 23,
        titel: "7",
        inhalt: "7"
      },
      {
        parentId: 6,
        id: 24,
        titel: "8",
        inhalt: "8"
      },
      {
        parentId: 7,
        id: 25,
        titel: "5",
        inhalt: "5"
      },
      {
        parentId: 7,
        id: 26,
        titel: "6",
        inhalt: "6"
      },
      {
        parentId: 7,
        id: 27,
        titel: "7",
        inhalt: "7"
      },
      {
        parentId: 7,
        id: 28,
        titel: "8",
        inhalt: "8"
      },
      {
        parentId: 8,
        id: 29,
        titel: "5",
        inhalt: "5"
      },
      {
        parentId: 8,
        id: 30,
        titel: "6",
        inhalt: "6"
      },
      {
        parentId: 8,
        id: 31,
        titel: "7",
        inhalt: "7"
      },
      {
        parentId: 8,
        id: 32,
        titel: "8",
        inhalt: "8"
      },
      {
        parentId: 9,
        id: 33,
        titel: "5",
        inhalt: "5"
      },
      {
        parentId: 9,
        id: 34,
        titel: "6",
        inhalt: "6"
      },
      {
        parentId: 9,
        id: 35,
        titel: "7",
        inhalt: "7"
      },
      {
        parentId: 9,
        id: 36,
        titel: "8",
        inhalt: "8"
      },
      {
        parentId: 10,
        id: 37,
        titel: "5",
        inhalt: "5"
      },
      {
        parentId: 10,
        id: 38,
        titel: "6",
        inhalt: "6"
      },
      {
        parentId: 10,
        id: 39,
        titel: "7",
        inhalt: "7"
      },
      {
        parentId: 10,
        id: 40,
        titel: "8",
        inhalt: "8"
      },
      {
        parentId: 11,
        id: 41,
        titel: "5",
        inhalt: "5"
      },
      {
        parentId: 11,
        id: 42,
        titel: "6",
        inhalt: "6"
      },
      {
        parentId: 11,
        id: 43,
        titel: "7",
        inhalt: "7"
      },
      {
        parentId: 11,
        id: 44,
        titel: "8",
        inhalt: "8"
      },
      {
        parentId: 12,
        id: 45,
        titel: "5",
        inhalt: "5"
      },
      {
        parentId: 12,
        id: 46,
        titel: "6",
        inhalt: "6"
      },
      {
        parentId: 12,
        id: 47,
        titel: "7",
        inhalt: "7"
      },
      {
        parentId: 12,
        id: 48,
        titel: "8",
        inhalt: "8"
      },
      {
        parentId: 13,
        id: 49,
        titel: "5",
        inhalt: "5"
      },
      {
        parentId: 13,
        id: 50,
        titel: "6",
        inhalt: "6"
      },
      {
        parentId: 13,
        id: 51,
        titel: "7",
        inhalt: "7"
      },
      {
        parentId: 13,
        id: 52,
        titel: "8",
        inhalt: "8"
      },
      {
        parentId: 14,
        id: 53,
        titel: "5",
        inhalt: "5"
      },
      {
        parentId: 14,
        id: 54,
        titel: "6",
        inhalt: "6"
      },
      {
        parentId: 14,
        id: 55,
        titel: "7",
        inhalt: "7"
      },
      {
        parentId: 14,
        id: 56,
        titel: "8",
        inhalt: "8"
      },    ]
  }
}
