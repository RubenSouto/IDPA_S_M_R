import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { SupabaseService } from './supabase.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-user-management'

  session = this.supabase.getsession()

  constructor(private readonly supabase: SupabaseService,private router: Router) {}

  ngOnInit() {
    this.supabase.authChanges((ev, session) => {
      this.session = session
      if(ev == 'SIGNED_OUT') this.router.navigate(['signin'])
    })
  }

  async signOut(){await this.supabase.signOut()}
  public account(){if(this.session != null) this.router.navigate(['account'])}
  public home(){if(this.session != null) this.router.navigate(['home'])}

}