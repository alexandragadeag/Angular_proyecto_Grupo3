import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-donation',
  standalone: true,
  imports: [RouterLink, DonationComponent,],
  templateUrl: './donation.component.html',
  styleUrl: './donation.component.css'
})
class DonationComponent {

  constructor() { }

  ngOnInit() {
  }

  donate() {

}
}
