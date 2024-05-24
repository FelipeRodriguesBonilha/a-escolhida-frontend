import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { LoginDto } from '../models/auth/loginDto';
import { ReturnLoginDto } from '../models/auth/returnLoginDto';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  loginForm!: FormGroup;
  error!: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmitForm(): void {
    const loginDto: LoginDto = this.loginForm.value;

    this.authService.login(loginDto).subscribe({
      next: (response: ReturnLoginDto) => {
        localStorage.setItem('acessToken', response.accessToken);
        localStorage.setItem('user', JSON.stringify(response.user));
        this.router.navigate(['']);
      },
      error: (err: HttpErrorResponse) => {
        this.error = err.error.message;
      }
    })
  }
}
