import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { Invoice } from '../interfaces/invoice.model';
import { HttpClient } from '@angular/common/http';
import { Contract } from '../interfaces/contract.model';

@Component({
  selector: 'app-invoice-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, NgbAlert],
  templateUrl: './invoice-form.component.html',
  styleUrl: './invoice-form.component.css'
})
export class InvoiceFormComponent implements OnInit {

  showConfirmMessage = false;


  invoiceForm = new FormGroup({
    id: new FormControl(),
    price: new FormControl(),
    kw: new FormControl(),
    startDate: new FormControl(),
    endDate: new FormControl(),
    totalPrice: new FormControl(),
    active: new FormControl(), // Agrega un nuevo FormControl para el campo 'active' con valor inicial false
    contract: new FormControl(),
  });



  isUpdate: boolean = false;
  contract: Contract | undefined;



  constructor(private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.isUpdate = true;
        this.httpClient.get<Contract>(`http://localhost:3000/contract/filter-by-id/${id}`).subscribe(data => {
          this.contract = data;
        });
      }
    });

  };

  save() {
    const url = 'http://localhost:3000/invoice';
    const invoice = this.invoiceForm.value as Invoice;
    invoice.contract = this.contract;
    this.httpClient.post<Invoice>(url, invoice).subscribe(data => this.showConfirmMessage = true);
  }
}
