import { Component, OnInit } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { Router } from '@angular/router'
import { SupabaseService } from '../supabase.service'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  loading = false               // Variable "loading" initialisieren
  signedIn = false              // Variable "signedIn" initialisieren

  // Formular-Objekt "signInForm" mit den Feldern "email" und "password" initialisieren
  signInForm = this.formBuilder.group({
    email: '',
    password: '',
  })

  constructor(
    private readonly supabase: SupabaseService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {}

  async onSubmit(): Promise<void> {         // Methode "onSubmit" für Formular-Submit-Event
    try {
      this.loading = true                   // "loading" auf "true" setzen
      const email = this.signInForm.value.email as string   // Benutzereingabe für "email" holen
      const password = this.signInForm.value.password as string   // Benutzereingabe für "password" holen
      const { error } = await this.supabase.signIn(email, password)   // Anmeldung durchführen
      if (error) throw error
      else this.signedIn = true
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)                 // Fehlermeldung ausgeben
      }
    } finally {
      this.signInForm.reset()                  // Formular zurücksetzen
      this.loading = false                     // "loading" auf "false" setzen
      if(this.signedIn) this.router.navigate(['home'])   // zur Home-Seite navigieren, falls Anmeldung erfolgreich war
    }
  }
}
