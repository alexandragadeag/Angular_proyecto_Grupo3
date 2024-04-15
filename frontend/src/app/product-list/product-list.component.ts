import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Product } from '../interfaces/product.model';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
    
  products: Product[] = [];
  isAdmin = false;

  constructor(private httpClient: HttpClient,
    private authService: AuthenticationService,
    private router: Router
  ) {
     this.authService.isAdmin.subscribe(isAdmin => this.isAdmin = isAdmin);
  }
   
  
  ngOnInit(): void {
       this.httpClient.get<Product[]>('http://localhost:3000/product')
       .subscribe(products => this.products = products);
   }


}
