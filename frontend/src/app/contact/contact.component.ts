import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Contact } from '../interfaces/contact.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {


  showConfirmMessage = false;

  /**
   * Represents the contact form in the contact component.
   */
  contactForm = this.fb.group({
   
    name: ['',[Validators.required]],
    email: ['',[Validators.required]],
    comment: ['',[Validators.required]],
  

  });

  constructor(private fb: FormBuilder,
    private httpClient: HttpClient) {}

    save(){
      let contact: Contact = {
        name: this.contactForm.get('name')?.value ?? '',
        email: this.contactForm.get('email')?.value ?? '',
        comment: this.contactForm.get('comment')?.value ?? '',
      };

      let url = 'http://localhost:3000/contact';
      this.httpClient.post<Contact>(url, contact).subscribe(res => {
        console.log(res);
        this.showConfirmMessage = true;
      });
    }

}

