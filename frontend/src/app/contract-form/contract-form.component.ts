import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Contract } from '../interfaces/contract.model';


@Component({
  selector: 'app-contract-form',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, RouterLink],
  templateUrl: './contract-form.component.html',
  styleUrl: './contract-form.component.css'
})
export class ContractFormComponent implements OnInit{

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
  showConfirmMessage: boolean | undefined;
  
  constructor(private httpClient: HttpClient,
  private activatedRoute: ActivatedRoute, 
  private router: Router
  ) {}

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      let id =params['id'];
      this.httpClient.get<Contract>(`http://localhost:3000/contract/${id}`).subscribe(contract => {
      
         this.isUpdate = true;
  
          this.contractForm.reset({
          id:contract.id,
          duration: contract.duration,
          discount: contract.discount,
          startDate: contract.startDate,
          endDate: contract.endDate,
          bankAccountNumber: contract.bankAccountNumber,
          paymentFrequency: contract.paymentFrequency,
          active: contract.active
        });

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

  if(this.isUpdate){
    // ACTUALIZAR UN CONTRATO EXISTENTE
    const urlForUpdate = 'http://localhost:3000/contract/' + contract.id;
    this.httpClient.put<Contract>(urlForUpdate, contract).subscribe(data => this.router.navigate(['/']));
  } else {
    // CREAR UN NUEVO CONTRATO 
    const url = 'http://localhost:3000/contract';
    this.httpClient.post<Contract>(url, contract).subscribe(data => this.router.navigate(['/']));
  }

}



}
