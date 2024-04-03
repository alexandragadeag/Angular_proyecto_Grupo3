import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// ng generate service authentication/authentication
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // Comprueba si un usuario ya está loqueado, es decir, existen token
  // Notifica a quien se haya suscrito a este booleano de que ha ocurrido un login
  isLoggedIn = new BehaviorSubject<boolean>(this.hasToken());

  constructor() { }

  hasToken(): boolean {
    return localStorage.getItem("jwt_token") !== null;
  }

  handleLogin(token: string) {
    // guardar el token en el almacenamiento del navegador 
    localStorage.setItem("jwt_token", token);
    this.isLoggedIn.next(true);
  }

  logout() {
    localStorage.removeItem("jwt_token");
    this.isLoggedIn.next(false);

  }
}
