import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Contract } from '../interfaces/contract.model';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-contract-list',
  standalone: true,
  imports: [HttpClientModule, RouterLink, NgbAlertModule],
  templateUrl: './contract-list.component.html',
  styleUrl: './contract-list.component.css'
})
export class ContractListComponent implements OnInit {

  contracts: Contract[] = [];
  showDeletedMessage: boolean = false;
  collapsed = true;
  isAdmin = false;


  constructor(private httpClient: HttpClient,
    private authService: AuthenticationService,
    private router: Router
  ) { 
    this.authService.isAdmin.subscribe(isAdmin => this.isAdmin = isAdmin);
  }

  ngOnInit(): void {
    this.loadContracts();
  }

  loadContracts() {
    this.httpClient.get<Contract[]>('http://localhost:3000/contract')
      .subscribe(contractsFromBackend => this.contracts = contractsFromBackend);
  }
  delete(contract: Contract) {
    this.httpClient.delete('http://localhost:3000/contract/' + contract.id)
      .subscribe(response => {
        this.showDeletedMessage = true;
        this.loadContracts();
      });
  }
  closeMessage() {
    this.showDeletedMessage = false;
  }

}
