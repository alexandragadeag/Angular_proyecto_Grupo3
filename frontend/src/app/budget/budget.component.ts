import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Budget } from '../interfaces/budget.model'
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-budget',
  standalone: true,
  imports: [ReactiveFormsModule, NgbAlert, RouterLink],
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.css'
})
export class BudgetComponent {

  showConfirmMessage = false;

  budgetForm = this.fb.group({
    id: [],
    name: ['',[Validators.required]],
    surname: ['', [Validators.required]],
    phone: [, [Validators.required]],
    email: ['',[Validators.required]],
    address: ['',[Validators.required]],
    postCode: [, [Validators.required]],
    town: ['', [Validators.required]],
    installation: ['', [Validators.required]],
    descriptionAppliances: ['', [Validators.required]]

  });

  constructor(private fb: FormBuilder,
    private httpClient: HttpClient) {}

    save(){

      let budget: Budget = {
        id: this.budgetForm.get('id')?.value?? 0,
        name: this.budgetForm.get('name')?.value?? '',
        surname: this.budgetForm.get('surname')?.value?? '',
        phone: this.budgetForm.get('phone')?.value ?? 0,
        email: this.budgetForm.get('email')?.value?? '',
        address: this.budgetForm.get('address')?.value?? '',
        postCode: this.budgetForm.get('postCode')?.value ?? 0,
        town: this.budgetForm.get('town')?.value?? '',
        installation: this.budgetForm.get('installation')?.value?? '',
        descriptionAppliances: this.budgetForm.get('descriptionAppliances')?.value?? '',


  
      };
      let url = 'http://localhost:3000/budget';
      this.httpClient.post<Budget>(url,budget)
                      .subscribe(res => {
                        console.log(res);
                        this.showConfirmMessage = true;
                      });
    }

}
