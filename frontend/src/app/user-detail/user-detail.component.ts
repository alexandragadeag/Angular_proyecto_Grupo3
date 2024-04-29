import { Component } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {


  // ngoninit

  // traer el usuario actual
  // localhost:3000/user/account

  // traer las invoices del usuario
  // localhost:3000/invoice

  // traer los contratos del user
  // localhost:3000/contract/filter-by-current-user
}
