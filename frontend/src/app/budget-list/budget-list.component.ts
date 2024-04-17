import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { Contract } from '../interfaces/contract.model';
import { Budget } from '../interfaces/budget.model';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-budget-list',
  standalone: true,
  imports: [RouterLink, NgbAlert],
  templateUrl: './budget-list.component.html',
  styleUrl: './budget-list.component.css'
})
export class BudgetListComponent {
[x: string]: any;
  contracts: Contract[] = [];
  budget: Budget[] = [];
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
    this.loadBudgets();
  }

  loadBudgets() {
    this.httpClient.get<Budget[]>('http://localhost:3000/budget/filter-by-current-user')
      .subscribe(budgetsFromBackend => this.budget = budgetsFromBackend);
  }
  delete(budget: Budget) {
    this.httpClient.delete('http://localhost:3000/budget/' + budget.id)
      .subscribe(response => {
        this.showDeletedMessage = true;
        this.loadBudgets();
      });
  }
  closeMessage() {
    this.showDeletedMessage = false;
  }

}



