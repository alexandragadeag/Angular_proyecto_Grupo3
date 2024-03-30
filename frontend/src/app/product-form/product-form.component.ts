import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../interfaces/product.model';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule, RouterLink],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements OnInit {

  productForm = new FormGroup({
    id: new FormControl(),
    title: new FormControl(''),
    price: new FormControl(0.0),
    photoUrl: new FormControl(''),
    description: new FormControl(''),
  });


  photoFile: File | undefined;
  photoPreview: string | undefined;
  isUpdate: boolean = false;
  product: Product | undefined;

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if (!id) {
        return; // si no hay categoría se termina el método
      }

      this.httpClient.get<Product>(`http://localhost:3000/product/${id}`).subscribe(product => {
        this.isUpdate = true;
        this.product = product;
        this.productForm.reset({
          id: product.id,
          title: product.title,
          description: product.description,
          photoUrl: product.photoUrl,
          price: product.price,
          
        });
      
      });

    });
  }

  onFileChange(event: Event) {

    let target = event.target as HTMLInputElement;

    if (target.files !== null && target.files.length > 0) {
      this.photoFile = target.files[0]; // extraer el primer archivo

      // Opcional: Mostrar la imagen por pantalla para previsualizarla antes de subirla
      let reader = new FileReader();
      reader.onload = event => this.photoPreview = reader.result as string;
      reader.readAsDataURL(this.photoFile);
    }

  }

  save() {

    let formData = new FormData();
    formData.append('id', this.productForm.get('id')?.value ?? 0);
    formData.append('title', this.productForm.get('title')?.value ?? '');
    formData.append('photoUrl', this.productForm.get('photoUrl')?.value ?? ''); // Conservar photoUrl para no perder foto
    formData.append('price', this.productForm.get('price')?.value + ''); // + '' Para conversión implítica de number a string
    formData.append('description', this.productForm.get('description')?.value ?? '');
  

    if (this.photoFile) formData.append('file', this.photoFile);

    if (this.isUpdate) {
      const id = this.productForm.get('id')?.value;
      this.httpClient.put<Product>('http://localhost:3000/product/' + id, formData)
        .subscribe(product => {
          this.photoFile = undefined;
          this.photoPreview = undefined;
          this.product = product;
        });

    } else {
      this.httpClient.post<Product>('http://localhost:3000/product', formData)
        .subscribe(product => {
          this.photoFile = undefined;
          this.photoPreview = undefined;
          this.product = product;
        });
    }
  }

}
