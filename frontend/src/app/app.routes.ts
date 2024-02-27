import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

export const route: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UserListComponent },
    { path: 'users/:id', component: UserDetailComponent },
    { path: 'users/:id/edit', component: UserDetailComponent },
    { path: 'users/:id/delete', component: UserDetailComponent},
    { path: 'users/:id/plan', component: UserDetailComponent},
    
];
