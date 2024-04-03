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
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


export const route: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UserListComponent },
    { path: 'users/detail', component: UserDetailComponent },
    { path: 'users/:id/update', component: UserDetailComponent },
    { path: 'users/create', component: UserDetailComponent},
    { path: 'plans', component:PlanListComponent },
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'users/detail/:id', component: UserDetailComponent},
    { path: 'budget', component: BudgetComponent},
    { path: 'knowing',component: KnowingComponent},
    { path: 'donation',component: DonationComponent},
    { path: 'contracts/detail/:id', component: ContractDetailComponent},
    { path: 'contracts', component: ContractListComponent},
    { path: 'products', component: ProductListComponent},
    { path: 'products/create', component: ProductFormComponent},
    { path: 'products/:id/update', component: ProductFormComponent},
    { path: 'products/:id/detail', component: ProductDetailComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'login', component: LoginComponent},
    
    
];