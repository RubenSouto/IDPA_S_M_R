import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubThemaDataService } from '../shared/sub-thema-data.service';
import { SubThema } from '../shared/interface/thema';

@Component({
  selector: 'app-sub-thema',
  host: {
    class: 'main'
  },
  templateUrl: './sub-thema.component.html',
  styleUrls: ['./sub-thema.component.css']
})
export class SubThemaComponent {

  // Variable zum Speichern der ID des übergeordneten Themas
  public thema: number = 0;

  // Variable zum Speichern von Untert-Themen
  public subThemas: SubThema[] = [];

  // angezeigte Spalten in der Tabelle
  displayedColumns: string[] = ['titel']

  // Konstruktor zum Injizieren von Abhängigkeiten
  public constructor(private route: ActivatedRoute, private ds: SubThemaDataService){}

  // Lebenszyklus-Hook, der aufgerufen wird, wenn die Komponente initialisiert wird
  ngOnInit(){
  // die ID des übergeordneten Themas aus dem Routenparameter abrufen
  this.thema = this.route.snapshot.params['id'];
  // wenn die ID des übergeordneten Themas existiert, Untert-Themen abrufen
    if (this.thema != 0) {
      this.getSubThemas();
    }
  }

  // Methode zum Abrufen von Untert-Themen aus dem Daten-Service
  getSubThemas(){
    this.subThemas = this.ds.subThemas.filter(e => e.parentId == this.thema);
  }
}