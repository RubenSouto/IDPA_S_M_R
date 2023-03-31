import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {HardCodeThemaDataService} from '../shared/hard-code-thema-data.service'
import {Thema} from '../shared/interface/thema';

@Component({
  selector: 'app-thema',
  host: {
    class: 'main'
  },
  templateUrl: './thema.component.html',
  styleUrls: ['./thema.component.css']
})
export class ThemaComponent {

  themaArr: Thema[] = [] // Initializing an empty array to store Thema objects
  displayedColumns: string[] = ['id','titel'] // Defining column headers to be displayed in the table

  constructor(private data: HardCodeThemaDataService){ }

  ngOnInit(){
    this.themaArr = this.data.themaList // Assigning Thema objects from the service to themaArr
  }
}
