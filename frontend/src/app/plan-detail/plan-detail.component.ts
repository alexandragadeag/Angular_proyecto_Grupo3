import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, RouterLink } from '@angular/router';


@Component({
  selector: 'app-plan-detail',
  standalone: true,
  providers: [],
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

function Component(arg0: { selector: string; standalone: boolean; providers: never[]; templateUrl: string; styleUrl: string; }): (target: typeof PlanDetailComponent) => void | typeof PlanDetailComponent {
  throw new Error('Function not implemented.');
}
