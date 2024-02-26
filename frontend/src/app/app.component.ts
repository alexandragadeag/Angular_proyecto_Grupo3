import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserListComponent } from "./user-list/user-list.component";
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [NgbDropdownModule,RouterOutlet, UserListComponent, RouterLink]
})
export class AppComponent {
  title = 'frontend';
  collapsed = true;
}
