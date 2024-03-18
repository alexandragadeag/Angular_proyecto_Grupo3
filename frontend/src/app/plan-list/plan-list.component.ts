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

