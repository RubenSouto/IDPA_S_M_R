import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubThemaComponent } from './sub-thema/sub-thema.component';
import { ThemaComponent } from './thema/thema.component';
import { AccountComponent } from './account/account.component';
import { AuthComponent } from './auth/auth.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SubThemaHomeComponent } from './sub-thema-home/sub-thema-home.component';
import { SubInhaltComponent } from './sub-inhalt/sub-inhalt.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  { path: "home", component: ThemaComponent, canActivate: [AuthGuardService]},
   { path: 'account', component: AccountComponent, canActivate: [AuthGuardService]},
  { path: "thema/:id", component: SubThemaComponent, canActivate: [AuthGuardService]},
  { path: "subthema/:id", component: SubThemaHomeComponent, canActivate: [AuthGuardService]},
  { path: 'signin', component: AuthComponent},
  { path: 'signup', component: SignUpComponent},
  { path: '', redirectTo: '/home', pathMatch: 'prefix'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }