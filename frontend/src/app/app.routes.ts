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
import { roleAdminGuard,} from './authentication/role.guard';
import { AccountFormComponent } from './account-form/account-form.component';
import { ContactComponent } from './contact/contact.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { userLoggedInGuard } from './authentication/user-logged-in.guard';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { InvoiceFormComponent } from './invoice-form/invoice-form.component';

export const route: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contact', component: ContactComponent},
    { path: 'plans', component:PlanListComponent },
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'budget', component: BudgetComponent},
    { path: 'knowing',component: KnowingComponent},
    { path: 'donation',component: DonationComponent},
    { path: 'contracts/detail/:id', component: ContractDetailComponent},
    { path: 'contracts', component: ContractListComponent},
    { path: 'products', component: ProductListComponent,
    
      //canActivate: [isLoggedInGuard]
      canActivate: [userLoggedInGuard]
    },
    { path: 'products/create', component: ProductFormComponent,
    canActivate: [roleAdminGuard]
    },
    { path: 'products/:id/update', component: ProductFormComponent,
    canActivate: [roleAdminGuard]
    },
    { path: 'products/:id/detail', component: ProductDetailComponent},
    { path: 'invoices', component: InvoiceListComponent},
    { path: 'invoices/:id/detail', component: InvoiceDetailComponent}, 
    { path: 'contracts/create', component: ContractFormComponent,
    canActivate: [roleAdminGuard]
    },
    { path: 'contracts/:id/update', component: ContractFormComponent,
    canActivate: [roleAdminGuard]
    },
    {
        path: 'account',
        component: AccountFormComponent
      },
      { path: 'budgets', component: BudgetListComponent},
      { path: 'contracts/:budgetId/create', component: ContractFormComponent,
    canActivate: [roleAdminGuard]
    },
    { path: 'users', component: UserListComponent},
    { path: 'users/:id/detail', component: UserDetailComponent},
    { path: 'contracts/:id/create-invoice', component: InvoiceFormComponent},

    
    
];