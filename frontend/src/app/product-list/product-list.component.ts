import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../interfaces/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [HttpClientModule, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
    
  products: Product[] = [];

  constructor(private httpClient: HttpClient) {}
   
  
  ngOnInit(): void {
       this.httpClient.get<Product[]>('http://localhost:3000/product')
       .subscribe(products => this.products = products);
   }


}
