import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Register } from '../interfaces/register.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm = this.fb.group({
    nickname: [''],
    email: [''],
    phone: [''],
    password: ['']
   });
   constructor(private fb: FormBuilder,
     private httpClient: HttpClient) {}
 
   save(){
 
     let register: Register = {
       nickname: this.registerForm.get('nickname')?.value?? '',
       email: this.registerForm.get('email')?.value?? '',
       phone: this.registerForm.get('phone')?.value?? '',
       password: this.registerForm.get('phone')?.value?? '',
 
     };
     let url = 'http://localhost:3000/register';
     this.httpClient.post<Register>(url,register)
                     .subscribe(res => {
                       console.log(res);
                     });
   }

}
