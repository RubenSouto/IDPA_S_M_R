import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SubThemaDataService} from '../shared/sub-thema-data.service';
import { SubThema } from '../shared/interface/thema';

@Component({
  selector: 'app-sub-thema',
  templateUrl: './sub-thema.component.html',
  styleUrls: ['./sub-thema.component.css']
})
export class SubThemaComponent {

  public thema: number = 0;
  public subThemas: SubThema[] = [];
  displayedColumns: string[] = ['id', 'titel']

  public constructor(private route: ActivatedRoute, private ds: SubThemaDataService){}

  ngOnInit(){
    this.thema = this.route.snapshot.params['id'];
    if (this.thema != 0) {
      this.getSubThemas(); 
    }
  }
  getSubThemas(){
    this.subThemas = this.ds.subThemas.filter(e => e.parentId == this.thema);
  }
}
