import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Invoice } from '../interfaces/invoice.model';
import { RouterLink } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-invoice-list',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.css'
})
export class InvoiceListComponent implements OnInit {

  invoices: Invoice[] = [];
  showDeletedMessage: boolean = false;
  isAdmin = false;


  constructor(private httpClient: HttpClient, 
    private authService: AuthenticationService) {
      this.authService.isAdmin.subscribe(isAdmin => this.isAdmin = isAdmin);

     }

  ngOnInit(): void {
    this.loadInvoices();
  }

  loadInvoices() {
    this.httpClient.get<Invoice[]>('http://localhost:3000/invoice')
      .subscribe(invoicesFromBackend => this.invoices = invoicesFromBackend);
  }
  delete(invoice: Invoice) {
    this.httpClient.delete('http://localhost:3000/invoice/' + invoice.id)
      .subscribe(response => {
        this.showDeletedMessage = true;
        this.loadInvoices();
      });
  }
  closeMessage() {
    this.showDeletedMessage = false;
  }

}






