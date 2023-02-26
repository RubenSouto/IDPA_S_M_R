import { Component } from '@angular/core';
import {HardCodeThemaDataService} from '../shared/hard-code-thema-data.service'
import {Thema} from '../shared/interface/thema';

@Component({
  selector: 'app-thema',
  templateUrl: './thema.component.html',
  styleUrls: ['./thema.component.css']
})
export class ThemaComponent {

  public themas?: Thema[]

  constructor(private data: HardCodeThemaDataService){ }

  ngOnInit(){
    this.themas = this.data.themaList;
  }
}
