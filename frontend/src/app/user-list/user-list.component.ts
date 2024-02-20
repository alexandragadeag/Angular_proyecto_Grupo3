import { Component } from '@angular/core';
import { User } from '../interfaces/user.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users: User[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
   this.http.get<User[]>('http://localhost:3000/users')
   .subscribe(users => this.users = users);
  }

}
