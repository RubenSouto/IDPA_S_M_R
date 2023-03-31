import { Component, Input, OnInit } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { AuthError, AuthSession } from '@supabase/supabase-js'
import { Profile, SupabaseService } from '../supabase.service'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  loading = false                   // Variable "loading" initialisieren
  profile!: Profile                 // Variable "profile" initialisieren

  session = this.supabase.getsession() // Session-Objekt von Supabase holen und in Variable "session" speichern

  // Formular-Objekt "updateProfileForm" mit den Feldern "username", "website" und "avatar_url" initialisieren
  updateProfileForm = this.formBuilder.group({
    username: '',
    website: '',
    avatar_url: '',
  })

  constructor(private readonly supabase: SupabaseService, private formBuilder: FormBuilder) {}

  async ngOnInit(): Promise<void> {
    //this.session = this.supabase.getsession() as AuthSession;   (diese Zeile ist auskommentiert)
    await this.getProfile()       // Profil-Informationen holen

    const { username, website, avatar_url } = this.profile  // Profil-Informationen in Variablen "username", "website" und "avatar_url" speichern
    this.updateProfileForm.patchValue({
      username,
      website,
      avatar_url,
    })
  }

  async getProfile() {              // Methode "getProfile" zum Holen der Profil-Informationen
    try {
      this.loading = true           // "loading" auf "true" setzen
      if(!this.session) throw new AuthError("no session available")   // Fehler werfen, wenn kein Session-Objekt vorhanden ist
      
      const { user } = (this.session)        // Benutzer-Informationen aus der Session holen
      let { data: profile, error, status } = await this.supabase.profile(user)  // Profil-Informationen vom Backend-Server holen

      if (error && status !== 406) {        // Fehler werfen, wenn ein anderer Fehlercode als 406 zurückgegeben wird
        throw error
      }

      if (profile) {            // Wenn Profil-Informationen vorhanden sind, diese in die Variable "profile" speichern
        this.profile = profile
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)    // Fehlermeldung ausgeben, wenn es sich um einen Fehler vom Typ "Error" handelt
      }
    } finally {
      this.loading = false      // "loading" auf "false" setzen
    }
  }

  async updateProfile(): Promise<void> {         // Methode "updateProfile" zum Aktualisieren des Profils
    try {
      this.loading = true         // "loading" auf "true" setzen
      if(!this.session) throw new AuthError("no session available")   // Fehler werfen, wenn kein Session-Objekt vorhanden ist
      const { user } = this.session

      const username = this.updateProfileForm.value.username as string   // Benutzereingabe für "username" holen
      const website = this.updateProfileForm.value.website as string     // Benutzereingabe für "website" holen
      const avatar_url = this.updateProfileForm.value.avatar_url as string   // Benutzereingabe

      const { error } = await this.supabase.updateProfile({
        id: user.id,
        username,
        website,
        avatar_url,
      })
      if (error) throw error
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      this.loading = false
    }
  }

  async signOut() {
    await this.supabase.signOut()
  }
}