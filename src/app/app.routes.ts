import { Routes } from '@angular/router';
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
  {
    path: 'candidates',
    loadComponent: () =>
      import('../pages/candidates/candidates.component').then(
        (m) => m.CadidatesComponent
      ),
  },
  {
    path: 'parties',
    loadComponent: () =>
      import('../pages/parties/parties.component').then(
        (m) => m.PartiesComponent
      ),
  },
  {
    path: 'spending',
    loadComponent: () =>
      import('../pages/spending/spending.component').then(
        (m) => m.SpendingComponent
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('../pages/about/about.component').then(
        (m) => m.AboutComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('../pages/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
  },
  { path: '**', component: ErrorComponent },
 
];
