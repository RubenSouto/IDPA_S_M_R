import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubThemaComponent } from './sub-thema/sub-thema.component';
import { ThemaComponent } from './thema/thema.component';
import { AccountComponent } from './account/account.component';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
 // { path: "", component: ThemaComponent},
  { path: "home", component: ThemaComponent, canActivate: [AuthGuardService]},
  { path: "thema/:id", component: SubThemaComponent, canActivate: [AuthGuardService]},
  { path: 'signin', component: AuthComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'account', component: AccountComponent, canActivate: [AuthGuardService]},
  { path: '', redirectTo: '/home', pathMatch: 'prefix'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
