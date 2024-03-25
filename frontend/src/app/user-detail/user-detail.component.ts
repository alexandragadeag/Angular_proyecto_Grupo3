import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user.model';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css',
})
export class UserDetailComponent {
  updateUser() {
    throw new Error('Method not implemented.');
  }
  user: User | undefined;
  deleteUser: any;

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: RouterLink,
  ) {}

  ngOnInit(): void {
    alert('hola');
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.http.get<User>(`http://localhost:3000/users/${id}`).subscribe(
        (user) => {
          this.user = user;
          alert('User found');

        },
      );
    });
  }
}


