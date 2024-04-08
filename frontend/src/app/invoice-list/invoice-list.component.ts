import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Invoice } from '../interfaces/invoice.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-invoice-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.css'
})
export class InvoiceListComponent implements OnInit {

  invoices: Invoice[] = [];
  showDeletedMessage: boolean = false;
  invoicesFromBackend: Invoice[] = [];
invoice: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.loadInvoices();
  }

  loadInvoices() {
    this.httpClient.get<Invoice[]>('http://localhost:3000/invoice')
      .subscribe(contractsFromBackend => this.invoices = this.invoicesFromBackend);
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





