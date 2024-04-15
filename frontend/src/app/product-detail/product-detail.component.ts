import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Product } from '../interfaces/product.model';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
  
  collapsed = true;
  product: Product | undefined;
  isAdmin = false;

  constructor(private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private authService: AuthenticationService,
    private router: Router) {
      this.authService.isAdmin.subscribe(isAdmin => this.isAdmin = isAdmin);
    }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if(!id) {
        return; 
      }

      // traer products
      this.httpClient.get<Product>('http://localhost:3000/product/' + id)
      .subscribe(product => this.product = product);

    });
  }


}
