import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
  // Use dynamic imports to load modules lazily
    {
      path: '',
      children: [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'login'
        },
        {
          path: 'login',
          loadComponent: () => import('./pages/login/login.component').then(c => c.LoginComponent)
        },
        {
          path: 'register',
          loadComponent: () => import('./pages/register/register.component').then(c => c.RegisterComponent),
        }
    ]
  }
];
