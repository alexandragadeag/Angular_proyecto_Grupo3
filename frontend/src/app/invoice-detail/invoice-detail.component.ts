import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Invoice } from '../interfaces/invoice.model';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-invoice-detail',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './invoice-detail.component.html',
  styleUrl: './invoice-detail.component.css'
})
export class InvoiceDetailComponent implements OnInit {

  invoice: Invoice | undefined;
  
  constructor(private http: HttpClient, 
    private activatedRoute: ActivatedRoute) { }
    
    ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
    let id = params['id'];
    this.http.get<Invoice>('http://localhost:3000/invoice/' + id)
    .subscribe(invoice => this.invoice = invoice);
    });
    }

}