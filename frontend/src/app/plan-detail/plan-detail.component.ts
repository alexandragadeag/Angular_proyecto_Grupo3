import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-plan-detail',
  standalone: true,
  imports: [PlanDetailComponent, HttpClientModule, RouterLink,],
  templateUrl: './plan-detail.component.html',
  styleUrl: './plan-detail.component.css'
})
export class PlanDetailComponent {

}

const plan = {
  id: 1,
  title: 'Plan particular',
  descriptionShort: 'Plan 1 description',
  descriptionLong: 'Plan 1 description long',
  benefits: 'Plan 1 benefits',
  minDurationInMonths: 12,
  powerMinPrice: 0.089,
  powerMaxPrice: 0.089,
  // ...
  // más info...
  // ...
};
const plan2 =
{
  id: 2,
  title: 'Plan empresa',
  descriptionShort: 'Plan 2 description',
  descriptionLong: 'Plan 2 description long',
  benefits: 'Plan 2 benefits',
  minDurationInMonths: 12,
  powerMinPrice: 0.089,
  powerMaxPrice: 0.089,
}