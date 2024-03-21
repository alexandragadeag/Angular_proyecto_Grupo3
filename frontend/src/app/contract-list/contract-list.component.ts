import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Contract } from '../interfaces/contract.model';

@Component({
  selector: 'app-contract-list',
  standalone: true,
  imports: [HttpClientModule, RouterLink],
  templateUrl: './contract-list.component.html',
  styleUrl: './contract-list.component.css'
})
export class ContractListComponent implements OnInit {

  contracts: Contract[] = [];
  
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get<Contract[]>('http://localhost:3000/contract')
       .subscribe(authors => this.contracts = this.contracts);
  }

}
