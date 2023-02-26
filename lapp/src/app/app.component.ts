import { Component, OnInit } from '@angular/core'
import { Router, RouterOutlet } from '@angular/router'
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
      if(ev == 'SIGNED_IN') this.router.navigate(['account'])
      if(ev == 'SIGNED_OUT') this.router.navigate(['signin'])
    })
  }
}