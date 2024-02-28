import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-plan-list',
  standalone: true,
  imports: [RouterLink, HttpClientModule,],
  templateUrl: './plan-list.component.html',
  styleUrl: './plan-list.component.css'
})
export class PlanListComponent {

}

const plan = {
  id: 1,
  title: 'Plan particular',
  descriptionShort: 'Plan 1 description',
  descriptionLong: 'Plan 1 description long',
  benefits: 'Plan 1 benefits',
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
}
