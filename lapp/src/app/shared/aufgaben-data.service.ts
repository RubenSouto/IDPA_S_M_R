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
        id: 3,
        titel: "Aufgabe 1 zur Längenausdehnung",
        inhalt: "Es liegt, wieso auch immer, ein Glas-Massstab vor, dieser ist bei 0 C geeicht worden."+
        "Bei diesem lesen sie eine Strecken von 50 cm ab. Die Raumtemperatur beträgt dabei 20 C.<br>"+
        "Wie lang ist die eigentliche Strecke?",
        loesung: "50.01"
      },
      {
        parentId: 5,
        id: 4,
        titel: "Aufgabe 1 zur Flächenausdehnung",
        inhalt: "Ein Zinkblech hat bei 40 C eine Fläche von 4.25 m<sup>2</sup>. Durch die Sonne wird es auf 90 C erwärmt.<br>"+
        "Wie gross ist die dadruch bedingte prozentuale Flächenänderung?",
        loesung: "0.3%"
      },
      {
        parentId: 6,
        id: 5,
        titel: "Aufgabe 1 zur Volumenausdehnung",
        inhalt: "Der Tank eines Autos wird bei 0 Grad befüllt. Der Tank fasst 60 Liter.<br>"+
        "Nun wird das Auto in die Garage gestellt. Die Temperatur ist dort 25 C.<br>"+
        "Wie viel Treibstoff tropft auf den Boden? (&gamma;<sub>Benzin</sub> = 1.1 times; 10<sup>-3</sup>K<sup>-1</sup>)",
        loesung: "1.65"
      },
      {
        parentId: 7,
        id: 6,
        titel: "Aufgabe 1 zur Veränderung der Dichte bei Temperaturänderungen",
        inhalt: "Quecksilber hat bei 20 C eine Dichte von 13545.9 kg/m<sup>3</sup>.<br>"
        +"Wie gross ist die Dichte beim Gefrierpunkt? (&gamma;<sub>Hg</sub> = 0.182 times; 10<sup>-3</sup>K<sup>-1</sup>)",
        loesung: "13595.39"
      },
      {
        parentId: 9,
        id: 7,
        titel: "Aufgabe 1 zur Beziehung Wärme-Temperatur",
        inhalt: "Sie haben einen Pool im Garten der hat ein Fassungsvolumen von 100 m<sup>3</sup> Wasser.<br>"+
        "Nun heizen Sie diesen 10 Minuten lang. Dabei hat ihre Heizung einen Wirkungsgrad von 90% und nimmt 5kW auf.<br>"+
        "Wie viel wärmer ist der Pool nun? (Geben Sie das Resultat im Format <b>'x.xxxx'</b> an)",
        loesung: "0.0065"
      },
      {
        parentId: 10,
        id: 8,
        titel: "Aufgabe 1 zur Verbrennungswärme",
        inhalt: "Sie haben den gleichen Pool von der vorherigen Aufgabe. (100 m<sup>3</sup> Fassungsvolumen)<br>"+
        "Sie wollen ihn aber nun mit Kohle (H = 31.5 MJ kg<sup>-1</sup>) um 5 C erhitzen. Dabei hat der Vorgang einen Wirkungsgrad von 30%<br>"+
        "Wie viel Kilo Kohle brauchen Sie?",
        loesung: "221.27"
      },
      {
        parentId: 13,
        id: 9,
        titel: "Aufgabe 1 zu Mischprozessen",
        inhalt: "Nehmen Sie an sie haben 30 Kilos 50 C warmes Wasser. Jetzt wollen sie dieses auf 40 C abkühlen.<br>"+
        "Wie viele Kilos 10 C warmes Wasser müssen Sie dazu geben? (Kein Wärmeaustausch mit der Umgebung)",
        loesung: "10"
      },
    ]
  }
}
