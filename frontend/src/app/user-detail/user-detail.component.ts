
import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user.model';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-user-detail',
  standalone: true,
  providers: [NgFor],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit {
save() {
throw new Error('Method not implemented.');
}
  user: User | undefined;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.pipe(
      map(paramMap => paramMap.get('id'))
    ).subscribe(idParam => {
      if (idParam) {
        this.loadUser(parseInt(idParam, 10));
      }
    });

      this.user = {
        id: 1,
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
  loadUser(arg0: number) {
    throw new Error('Method not implemented.');
  }

      
    }
  