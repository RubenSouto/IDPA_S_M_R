import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private supabase: SupabaseService, private router: Router) { }
  
  async canActivate(): Promise<boolean> {
    if (await this.supabase.isAuthenticated()) {
      return true;
    }
    this.router.navigate(['signin']);
    return false;
  }
}
