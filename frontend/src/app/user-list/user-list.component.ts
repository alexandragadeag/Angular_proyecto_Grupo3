import { Component } from '@angular/core';
import { User } from '../interfaces/user.model';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../authentication/authentication.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users: User[] = [];
  showDeletedMessage: boolean = false;
  isAdmin = false;


  constructor(private httpClient: HttpClient, 
    private authService: AuthenticationService) {
      this.authService.isAdmin.subscribe(isAdmin => this.isAdmin = isAdmin);

     }

  ngOnInit(): void {
    this.loadusers();
  }

  loadusers() {
    this.httpClient.get<User[]>('http://localhost:3000/user')
      .subscribe(usersFromBackend => this.users = usersFromBackend);
  }

  // traer todos los usuarios con findAll de user controller

  // get localhost:3000/user
}
