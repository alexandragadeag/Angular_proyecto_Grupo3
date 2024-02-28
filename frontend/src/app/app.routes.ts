import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { PlanDetailComponent } from './plan-detail/plan-detail.component';
import { LoginComponent } from './login/login.component';

export const route: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UserListComponent },
    { path: 'users/:id', component: UserDetailComponent },
    { path: 'users/:id/edit', component: UserDetailComponent },
    { path: 'users/:id/delete', component: UserDetailComponent},
    { path: 'users/:id/plan', component: UserDetailComponent },
    { path: 'plans/:id', component:PlanDetailComponent },
    { path: 'plans/:id/edit', component:PlanDetailComponent },
    { path: 'plans/:id/delete', component:PlanDetailComponent},
    { path: 'login', component: LoginComponent},
    
];
