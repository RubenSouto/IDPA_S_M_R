import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubThemaComponent } from './sub-thema/sub-thema.component';
import { ThemaComponent } from './thema/thema.component';

const routes: Routes = [
  {
    path: "",
    component: ThemaComponent
  },
  {
    path: "home",
    component: ThemaComponent
  },
  {
    path: "thema/:id",
    component: SubThemaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
