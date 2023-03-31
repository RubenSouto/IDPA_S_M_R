// Import-Statements
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
  aufgabe?: Aufgabe // Feld für aktuelle Aufgabe
  theorie?: Theorie // Feld für aktuelle Theorie
  private _inhaltId: number = 0 // ID des aktuellen Inhalts (Standardwert 0)
  private _inhaltType: string = "" // Typ des aktuellen Inhalts (Standardwert "")
  public formGroup: FormGroup // Formular-Gruppe für Antwort-Eingabe

  @Input() 
  set inhaltId(value: number) { // Set-Methode für inhaltId-Input
    this._inhaltId = value; // Wert von Input in Feld speichern
    this.getInhalt() // Inhalt laden
  }
  get inhaltId(): number { // Get-Methode für inhaltId-Input
    return this._inhaltId;
  }

  @Input() 
  set inhaltType(value: string){ // Set-Methode für inhaltType-Input
    this._inhaltType = value // Wert von Input in Feld speichern
    this.getInhalt() // Inhalt laden
  }
  get inhaltType(): string { // Get-Methode für inhaltType-Input
    return this._inhaltType;
  }

  constructor(private as: AufgabenDataService, private ts: TheorieDataService, private fb: FormBuilder){
    this.getInhalt() // Inhalt laden

    this.formGroup = fb.group({ // Formular-Gruppe initialisieren
      answer: this.fb.control('') // Antwort-Feld initialisieren
    })

    this.formGroup.valueChanges.subscribe((e)=>{ // Bei Änderungen im Formular
      this.validate(e.answer) // Antwort validieren
    })
  }

  validate(answer: string){ // Antwort validieren
    console.log(answer) // Antwort in Konsole ausgeben
    if (answer == this.aufgabe?.loesung) { // Wenn Antwort richtig ist
      alert(answer + " war die richtige Antwort") // Erfolgsmeldung ausgeben
    }
  }

  getInhalt(){ // Inhalt (Aufgabe/Theorie) aus Daten-Service laden
    this.inhaltType == "theorie"? this.theorie = this.ts.theorieInhalte.filter(e => e.id == this.inhaltId)[0]
    : this.aufgabe = this.as.aufgabenInhalt.filter(e => e.id == this.inhaltId)[0]
  }
}
