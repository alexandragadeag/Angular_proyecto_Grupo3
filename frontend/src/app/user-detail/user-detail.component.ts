import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit {

  user: User | undefined;

  constructor(private activatedRoute: ActivatedRoute,
        private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getUserDetails(params['id']);
    });
  }

  getUserDetails(id: string): void {
    
  }
}
