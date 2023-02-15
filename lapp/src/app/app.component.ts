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
    this.supabase.authChanges((_, session) => (this.session = session))
    //if (this.session) this.router.navigate(['account'])
    //else this.router.navigate(['signin'])
  }
}