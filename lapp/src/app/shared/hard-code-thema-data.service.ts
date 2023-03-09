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
        titel: "Thermodynamik"
      }  
    ]
   }
}
