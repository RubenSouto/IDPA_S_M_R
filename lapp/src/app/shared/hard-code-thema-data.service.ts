import { Injectable } from '@angular/core';
import { Thema } from '../shared/interface/thema';

@Injectable({
  providedIn: 'root'
})
export class HardCodeThemaDataService {

  themaList?: Thema[];
  constructor() {
    this.themaList = [
      {
        id:1,
        titel: "Thema 1",
        subthemas: [
          {
            id:1,
            titel: "subThema1"
          },
          {
            id:2,
            titel: "subThema2"
          }
        ]
      },
      {
        id:2,
        titel: "Thema 2",
        subthemas: [
          {
            id:3,
            titel: "subThema3"
          },
          {
            id:4,
            titel: "subThem4"
          }
        ]
      },
      {
        id:3,
        titel: "Thema 3",
        subthemas: [
          {
            id:5,
            titel: "subThema5"
          },
          {
            id:6,
            titel: "subThem6"
          }
        ]
      }   
    ]
   }
}
