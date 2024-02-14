import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';

export const route: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UserListComponent }
];
