import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Contract } from '../interfaces/contract.model';
import { Budget } from '../interfaces/budget.model';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-contract-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, NgbAlert],
  templateUrl: './contract-form.component.html',
  styleUrl: './contract-form.component.css'
})
export class ContractFormComponent implements OnInit{

  showConfirmMessage = false;


  contractForm = new FormGroup({
    id: new FormControl(),
    duration: new FormControl(''),
    discount: new FormControl(0.0),
    startDate: new FormControl(),
    endDate: new FormControl(),
    bankAccountNumber: new FormControl(''),
    paymentFrequency: new FormControl(0.0),
    active: new FormControl(false) // Agrega un nuevo FormControl para el campo 'active' con valor inicial false
    
  });

  isUpdate: boolean = false;
  contract: Contract | undefined;
  budget: Budget | undefined;
  
  
  constructor(private httpClient: HttpClient,
  private activatedRoute: ActivatedRoute, 
  private router: Router
  ) {}

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {

      // CREAR UN CONTRATO A PARTIR DE UN BUDGET:
      let budgetId =params['budgetId'];
      if (budgetId) {
        this.httpClient
        .get<Budget>(`http://localhost:3000/budget/filter-by-id/${budgetId}`)
        .subscribe(budget => this.budget = budget);
      }
      
      // EDITAR UN CONTRATO
      let id =params['id'];

      if (!id) return;
      
      this.httpClient
      .get<Contract>(`http://localhost:3000/contract/filter-by-id/${id}`)
      .subscribe(contract => {
         this.isUpdate = true;
          this.contractForm.reset(contract);
      });
    });

}
save(): void {
  console.log('invocando.save');

  const contract: Contract = {

    id: this.contractForm.get('id')?.value ?? 0,
    duration: this.contractForm.get('duration')?.value ?? '',
    discount: this.contractForm.get('discount')?.value ?? 0,
    startDate: this.contractForm.get('startDate')?.value ?? new Date(),
    endDate: this.contractForm.get('endDate')?.value ?? new Date(),
    bankAccountNumber: this.contractForm.get('bankAccountNumber')?.value ?? '',
    paymentFrequency: this.contractForm.get('paymentFrequency')?.value ?? 0,
    active: this.contractForm.get('active')?.value ?? false,

  };
  if (this.budget) {
    contract.budget = this.budget;
  }
  if (this.contract?.budget) {
    contract.budget = this.contract.budget;
  }
  if (this.contract?.user) {
    contract.user = this.contract.user;
  }


  if(this.isUpdate){
    // ACTUALIZAR UN CONTRATO EXISTENTE
    const urlForUpdate = 'http://localhost:3000/contract/' + contract.id;
    this.httpClient.put<Contract>(urlForUpdate, contract).subscribe(data => this.showConfirmMessage = true);
  } else {
    // CREAR UN NUEVO CONTRATO 
    const url = 'http://localhost:3000/contract';
    this.httpClient.post<Contract>(url, contract).subscribe(data => this.showConfirmMessage = true);
  }

  

}



}
