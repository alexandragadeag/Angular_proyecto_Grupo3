import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [HttpClientModule,RouterLink],
  providers: [NgFor],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit {
deleteUser() {
throw new Error('Method not implemented.');
}

  user : User | undefined;

  constructor(private http: HttpClient,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.http.get<User>(`http://localhost:3000/products/${id}`)
        .subscribe(user => this.user = user);
    });
  }

}
