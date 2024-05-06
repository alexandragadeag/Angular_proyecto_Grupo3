import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { User } from '../interfaces/user.model';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../authentication/authentication.service';
import { Invoice } from '../interfaces/invoice.model';
import { ControlConfig } from '@angular/forms';
import { Contract } from '../interfaces/contract.model';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {

  user: User |undefined;
  showDeletedMessage: boolean = false;
  isAdmin = false;
  invoices: Invoice[] | undefined;
  contracts: Contract[] | undefined;

  constructor(private httpClient: HttpClient, 
    private authService: AuthenticationService,
    private activatedRoute: ActivatedRoute,) {
      this.authService.isAdmin.subscribe(isAdmin => this.isAdmin = isAdmin);

     }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if(!id) {
        return; 
      }
      this.httpClient.get<User>('http://localhost:3000/user/filter-by-id/'  + id)
      .subscribe(usersFromBackend => this.user = usersFromBackend);
      
      this.httpClient.get<Invoice[]>('http://localhost:3000/invoice/filter-by-user-id/' + id)
      .subscribe(invoices => this.invoices = invoices);
      
      this.httpClient.get<Contract[]>('http://localhost:3000/contract/filter-by-user-id/' + id)
      .subscribe(contracts => this.contracts = contracts);

    });

    
  }

  
}
