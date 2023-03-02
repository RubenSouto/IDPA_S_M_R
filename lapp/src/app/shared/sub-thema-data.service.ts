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
        titel: "subThema1"
      },
      {
        parentId:1,
        id:2,
        titel: "subThema2"
      },
      {
        parentId:2,
        id:3,
        titel: "subThema3"
      },
      {
        parentId:2,
        id:4,
        titel: "subThema4"
      },
      {
        parentId:3,
        id:5,
        titel: "subThema5"
      },
      {
        parentId:3,
        id:6,
        titel: "subThema6"
      }
    ]
  }
}
