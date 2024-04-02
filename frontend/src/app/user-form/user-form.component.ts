import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { User } from '../interfaces/user.model';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule, RouterLink],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

  userForm = new FormGroup({
    id: new FormControl(),
    customer_name: new FormControl(),
    customer_email: new FormControl(),
    password: new FormControl(),
    customer_phone: new FormControl(),
    nif_cif: new FormControl(),
    installation_addres: new FormControl(),
    contract_date: new FormControl(),
    account_number: new FormControl(),
    m2: new FormControl(),
    members: new FormControl(),
    electric_car: new FormControl(),

  });

  user: User | undefined;
  isUpdate: boolean = false;

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if (!id) {
        return;
      }

      this.httpClient.get<User>('http://localhost:3000/user/' + id)
        .subscribe(user => {
          this.isUpdate = true;
          return this.userForm.reset(user);
        });



    });
  }

  save() {

      let formData = new FormData();
      formData.append('id', this.userForm.get('id')?.value ?? '');
      formData.append('customer_name', this.userForm.get('customer_name')?.value ?? '');
      formData.append('customer_email', this.userForm.get('customer_email')?.value ?? '');
      formData.append('password', this.userForm.get('password')?.value ?? '');
      formData.append('customer_phone', this.userForm.get('customer_phone')?.value ?? '');
      formData.append('nif_cif', this.userForm.get('nif_cif')?.value ?? '');
      formData.append('installation_addres', this.userForm.get('installation_addres')?.value ?? '');
      formData.append('contract_date', this.userForm.get('contract_date')?.value ?? '');
      formData.append('account_number', this.userForm.get('account_number')?.value ?? '');
      formData.append('m2', this.userForm.get('m2')?.value ?? '');
      formData.append('members', this.userForm.get('members')?.value ?? '');
      formData.append('electric_car', this.userForm.get('electric_car')?.value ?? '');
  

      if(this.isUpdate) {
      const id = this.userForm.get('id')?.value;
      this.httpClient.put<User>('http://localhost:3000/user/' + id, formData)
        .subscribe(user => {
          this.user = user;
        });

    } else {
      this.httpClient.post<User>('http://localhost:3000/user', formData)
        .subscribe(user => {
          this.user = user;
        });
    }
  }


}



