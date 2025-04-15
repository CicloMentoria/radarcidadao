import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { ErrorComponent } from '../pages/error/error.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../pages/home/home.component').then(
        (m) => m.HomeComponent
      ),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('../pages/home/home.component').then(
        (m) => m.HomeComponent
      ),
  },
  { path: '**', component: ErrorComponent },
 
];
