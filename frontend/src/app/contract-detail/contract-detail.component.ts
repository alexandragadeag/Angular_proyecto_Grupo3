import { DatePipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { Contract } from '../interfaces/contract.model';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-contract-detail',
  standalone: true,
  imports: [HttpClientModule, DatePipe, RouterLink, NgbAlert],
  templateUrl: './contract-detail.component.html',
  styleUrl: './contract-detail.component.css'
})
export class ContractDetailComponent implements OnInit {

  contract: Contract | undefined;
  collapsed = true;
  isAdmin = false;

  constructor(private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private authService: AuthenticationService,
    private router: Router
  ) { 
    
    this.authService.isAdmin.subscribe(isAdmin => this.isAdmin = isAdmin);

  }
      
      
    
    ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
    let id = params['id'];
    this.http.get<Contract>('http://localhost:3000/contract/filter-by-id/' + id)
    .subscribe(contract => this.contract = contract);
    });
    }

}
