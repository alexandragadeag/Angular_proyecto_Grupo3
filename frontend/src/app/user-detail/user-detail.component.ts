
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../interfaces/user.model';


@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit {
  user: User | undefined;
  activatedRoute: any;

  constructor(private route: ActivatedRoute) {}
    
  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      console.log(params['id']);
let idString = params['id'];
console.log('id', idString, 10);
let idNumber = parseInt(idString, 10);
console.log(idNumber);

this.user = {
  id: idNumber,
  customer_name: 'Juan',
  customer_email: '',
  password: '1234',
  customer_phone: '123456789',
  nif_cif: '12345678A',
  installation_addres: 'Calle de la piruleta',
  installation_city: 'Madrid',
  postal_code: 28000,
  account_number: 123456789,
  m2: 100,
  members: 4,
  electric_car: true
};
     
    }


}


