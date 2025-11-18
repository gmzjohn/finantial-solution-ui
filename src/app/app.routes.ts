import { Routes } from '@angular/router';
import { Home } from './view/home/home';
import { Users } from './view/users/users';
import { CreateUser } from './view/create-user/create-user';

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
  {
    path: 'users/create',
    component: CreateUser,
  },
];
