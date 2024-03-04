import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { PlanDetailComponent } from './plan-detail/plan-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PlanListComponent } from './plan-list/plan-list.component';

export const route: Routes = [
    { path: '', component: HomeComponent },
    
    { path: 'users', component: UserListComponent },
    { path: 'users/:id', component: UserDetailComponent },

    { path: 'plans', component:PlanListComponent },
    { path: 'plans/:id', component:PlanDetailComponent },

    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
];
