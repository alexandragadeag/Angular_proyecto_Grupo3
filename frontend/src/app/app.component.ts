import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from './authentication/authentication.service';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [NgbDropdownModule,RouterOutlet,RouterLink]
})
export class AppComponent {
  title = 'frontend';
  collapsed = true;

  isLoggedIn = false;

  constructor(private authService: AuthenticationService) {
    // Esto permite que el componente Navbar se entere de que ha ocurrido un login exitoso
    this.authService.isLoggedIn.subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
  }
}
