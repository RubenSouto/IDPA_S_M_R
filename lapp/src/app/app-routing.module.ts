import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubThemaComponent } from './sub-thema/sub-thema.component';
import { ThemaComponent } from './thema/thema.component';
import { AccountComponent } from './account/account.component';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { SignUpComponent } from './sign-up/sign-up.component';

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
  },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: AppComponent},
  { path: 'signin', component: AuthComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'account', component: AccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
