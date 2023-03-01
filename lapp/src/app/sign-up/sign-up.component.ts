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
  loading = false

  signUpForm = this.formBuilder.group({
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
      this.loading = true
      const email = this.signUpForm.value.email as string
      const password = this.signUpForm.value.password as string
      const { error } = await this.supabase.signUp(email, password)
      if (error) throw error
      else alert("signed up!")
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      this.signUpForm.reset()
      this.loading = false
      this.router.navigate(['signin'])
    }
  }
}
