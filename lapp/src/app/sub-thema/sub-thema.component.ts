import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-thema',
  templateUrl: './sub-thema.component.html',
  styleUrls: ['./sub-thema.component.css']
})
export class SubThemaComponent {

  public thema?: number;

  public constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.thema = this.route.snapshot.params['id'];
  }
}
