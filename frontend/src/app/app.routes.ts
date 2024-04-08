import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
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
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';

import { ContractFormComponent } from './contract-form/contract-form.component';

export const route: Routes = [
    { path: '', component: HomeComponent },
    { path: 'plans', component:PlanListComponent },
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'budget', component: BudgetComponent},
    { path: 'knowing',component: KnowingComponent},
    { path: 'donation',component: DonationComponent},
    { path: 'contracts/detail/:id', component: ContractDetailComponent},
    { path: 'contracts', component: ContractListComponent},
    { path: 'products', component: ProductListComponent},
    { path: 'products/create', component: ProductFormComponent},
    { path: 'products/:id/update', component: ProductFormComponent},
    { path: 'products/:id/detail', component: ProductDetailComponent},
    { path: 'invoices', component: InvoiceListComponent},
    { path: 'invoices/:id/detail', component: InvoiceDetailComponent}, 
    { path: 'contracts/create', component: ContractFormComponent},
    { path: 'contracts/:id/update', component: ContractFormComponent},
    
];