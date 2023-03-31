import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router'
import { SupabaseService } from '../supabase.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  loading = false // Zustand der Anfrage

  signUpForm = this.formBuilder.group({ // Sign-Up-Formular
    email: '',
    password: '',
  })

  constructor(
    private readonly supabase: SupabaseService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  async onSubmit(): Promise<void> {
    try {
      this.loading = true // Anfrage läuft
      const email = this.signUpForm.value.email as string
      const password = this.signUpForm.value.password as string
      const { error } = await this.supabase.signUp(email, password) // SignUp-Anfrage abschicken
      if (error) throw error // Fehler werfen, falls vorhanden
      else alert("signed up!") // Erfolgsmeldung anzeigen
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message) // Fehlermeldung anzeigen
      }
    } finally {
      this.signUpForm.reset() // Formular zurücksetzen
      this.loading = false // Anfrage beenden
      this.router.navigate(['signin']) // Zu SignIn-Komponente navigieren
    }
  }
}
