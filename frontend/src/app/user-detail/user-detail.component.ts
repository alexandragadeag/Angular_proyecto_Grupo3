import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { User } from '../user-list/user-list.component';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [HttpClientModule, RouterLink],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent  implements OnInit {

  user: User | undefined;
customer: any;
installation_addres: any;
account_number: any;
m2: any;
electric_car: any;
  constructor(private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute) {}
  
ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if(!id) {
        return; 
      }

      this.httpClient.get<User>(`http://localhost:3000/users/${id}`)
        .subscribe(user => this.user = user);

});
}

}
