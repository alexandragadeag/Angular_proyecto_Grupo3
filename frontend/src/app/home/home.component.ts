import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbAccordionModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgbCarouselModule, NgbAccordionModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [],
})
export class HomeComponent {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
