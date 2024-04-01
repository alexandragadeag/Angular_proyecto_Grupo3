
import { NgFor } from '@angular/common';
import { User } from '../interfaces/user.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core'; 
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor, HttpClientModule, RouterLink],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit { 
  users: User[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
   this.http.get<User[]>('http://localhost:3000/user')
   .subscribe(users => this.users = users);
  }

}

export { User };
