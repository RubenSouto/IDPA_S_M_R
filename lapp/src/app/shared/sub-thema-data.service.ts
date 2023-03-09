import { Injectable } from '@angular/core';
import { SubThema } from './interface/thema';

@Injectable({
  providedIn: 'root'
})
export class SubThemaDataService {

  public subThemas: SubThema[]
  constructor() {
    this.subThemas = [
      {     
        parentId:1,
        id:1,
        titel: "1.1 Temperaturbegriff"
      },
      {
        parentId:1,
        id:2,
        titel: "1.2 Messung der Temperatur"
      },
      {
        parentId:1,
        id:3,
        titel: "1.3 Wärmeausdehnung"
      },
      {
        parentId:1,
        id:4,
        titel: "1.3.1 Längenausdehung von Festkörpern"
      },
      {
        parentId:1,
        id:5,
        titel: "1.3.2 Flächenausdehnung"
      },
      {
        parentId:1,
        id:6,
        titel: "1.3.3 Volumenausdehnung"
      },
      {
        parentId:1,
        id:7,
        titel: "1.3.3.1 Veränderung der Dichte bei Temperaturänderungen"
      },
      {
        parentId:1,
        id:8,
        titel: "1.3.3.1 Veränderung der Dichte bei Temperaturänderungen"
      },
      {
        parentId:1,
        id:9,
        titel: "1.4 Wärme"
      },
      {
        parentId:1,
        id:10,
        titel: "1.4.1 Beziehung Wärme-Temperatur"
      },
      {
        parentId:1,
        id:11,
        titel: "1.5 Phasenübergänge"
      },
      {
        parentId:1,
        id:12,
        titel: "1.6 Hauptsätze der Thermodynamik"
      },
      {
        parentId:1,
        id:13,
        titel: "1.7 Mischprozesse"
      },
      {
        parentId:1,
        id:14,
        titel: "1.8 Gasgesetze für ideale Gase"
      }
    ]
  }
}
