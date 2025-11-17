import { Routes } from '@angular/router';
import { Home } from './view/home/home';
import { Users } from './view/users/users';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'users',
    component: Users,
  },
];
