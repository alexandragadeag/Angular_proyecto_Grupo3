import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from './authentication/authentication.service';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [NgbDropdownModule,RouterOutlet,RouterLink, RouterLinkActive]
})
export class AppComponent {
  
  title = 'frontend';
  collapsed = true;
  isLoggedIn = false;
  userEmail: string | undefined;

  constructor(
    private authService: AuthenticationService,
    private router: Router
    ) {
    // Esto permite que el componente Navbar se entere de que ha ocurrido un login exitoso
    this.authService.isLoggedIn.subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
    this.authService.userEmail.subscribe(userEmail => this.userEmail = userEmail);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
