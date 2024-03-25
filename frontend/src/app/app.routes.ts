import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PlanListComponent } from './plan-list/plan-list.component';
import { BudgetComponent } from './budget/budget.component';
import { KnowingComponent } from './knowing/knowing.component';
import { DonationComponent } from './donation/donation.component';
import { ContractDetailComponent } from './contract-detail/contract-detail.component';
import { ContractListComponent } from './contract-list/contract-list.component';


export const route: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UserListComponent },
    { path: 'users/detail', component: UserDetailComponent },
    { path: 'plans', component:PlanListComponent },
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'users/detail/:id', component: UserDetailComponent},
    { path: 'budget', component: BudgetComponent},
    { path: 'knowing',component: KnowingComponent},
    { path: 'donation',component: DonationComponent},
    { path: 'contracts/detail/:id', component: ContractDetailComponent},
    { path: 'contracts', component: ContractListComponent}
    
    
];