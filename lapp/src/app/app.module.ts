import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AccountComponent } from './account/account.component';
import { ThemaComponent } from './thema/thema.component';
import { SubThemaComponent } from './sub-thema/sub-thema.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SubThemaHomeComponent } from './sub-thema-home/sub-thema-home.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AccountComponent,
    ThemaComponent,
    SubThemaComponent,
    SignUpComponent,
    SubThemaHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
