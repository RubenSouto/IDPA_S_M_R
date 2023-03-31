import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { SupabaseService } from './supabase.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // Titel des AppComponent
  title = 'angular-user-management'

  // Session-Variable
  session = this.supabase.getsession()

  // Konstruktor mit Injektion von SupabaseService und Router
  constructor(private readonly supabase: SupabaseService,private router: Router) {}

  ngOnInit() {
    // Authentifizierungsänderungen werden abgefangen
    this.supabase.authChanges((ev, session) => {
      // Session wird aktualisiert
      this.session = session
      // Wenn sich der Benutzer ausgeloggt hat, wird er zur Login-Seite navigiert
      if(ev == 'SIGNED_OUT') this.router.navigate(['signin'])
    })
  }

  // Sign-out Funktion
  async signOut(){await this.supabase.signOut()}
  // Account-Funktion
  public account(){if(this.session != null) this.router.navigate(['account'])}
  // Home-Funktion
  public home(){if(this.session != null) this.router.navigate(['home'])}

}