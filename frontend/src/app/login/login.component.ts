import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Login } from '../interfaces/login.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private httpClient: HttpClient,
    private router: Router) {}

  save() {

    let login: Login = {
      email: this.loginForm.get('email')?.value ?? '',
      password: this.loginForm.get('password')?.value ?? ''
    }

    // Enviar login por POST a backend con http
    let url = 'http://localhost:3000/login';
    this.httpClient.post<Login>(url, login)
                .subscribe(res => {
                  // La respuesta tendría un token JWT que podríamos
                  // guardar en localStorage.
                  console.log(res);

                  // Redirigir hacia la página home
                  this.router.navigate(['/home']);
                });



  }
}

