import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../interfaces/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [HttpClientModule, RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{

  product: Product | undefined;
  

  constructor(private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute) {}

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
