import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Budget } from '../interfaces/budget.model'
@Component({
  selector: 'app-budget',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.css'
})
export class BudgetComponent {

  budgetForm = this.fb.group({
    name: [''],
    surname: [''],
    phone: [0],
    email: [''],
    address: [''],
    postCode: [0],
    town: [''],
    installation: [''],
    descriptionAppliances: ['']

  });

  constructor(private fb: FormBuilder,
    private httpClient: HttpClient) {}

    save(){

      let budget: Budget = {
        name: this.budgetForm.get('name')?.value?? '',
        surname: this.budgetForm.get('surname')?.value?? '',
        phone: this.budgetForm.get('phone')?.value ?? 0,
        email: this.budgetForm.get('email')?.value?? '',
        address: this.budgetForm.get('address')?.value?? '',
        postCode: this.budgetForm.get('postCode')?.value ?? 0,
        town: this.budgetForm.get('town')?.value?? '',
        installation: this.budgetForm.get('installatiom')?.value?? '',
        descriptionAppliances: this.budgetForm.get('descriptionAppliances')?.value?? '',


  
      };
      let url = 'http://localhost:3000/budget';
      this.httpClient.post<Budget>(url,budget)
                      .subscribe(res => {
                        console.log(res);
                      });
    }

}
