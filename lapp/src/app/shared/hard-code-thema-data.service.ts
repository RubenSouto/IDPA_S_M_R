import { Injectable } from '@angular/core';
import { Thema } from '../shared/interface/thema';

@Injectable({
  providedIn: 'root'
})
export class HardCodeThemaDataService {

  themaList: Thema[];
  constructor() {
    this.themaList = [
      {
        id:1,
        titel: "Thema 1"
      },
      {
        id:2,
        titel: "Thema 2"
      },
      {
        id:3,
        titel: "Thema 3"
      }   
    ]
   }
}
