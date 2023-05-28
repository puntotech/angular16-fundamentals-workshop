import { Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth-guard.';

export const routes: Routes = [
  // Use dynamic imports to load modules lazily
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'auth'
      },
      {
        path: 'hero',
        loadChildren: () => import('./features/heroes/heroes.routes').then(r => r.HEROES_ROUTES),
        canActivate: [authGuard],
      },
      {
        path: 'auth',
        loadChildren: () => import('./features/auth/auth.routes').then(r => r.AUTH_ROUTES),
      },
    ]
  },

  { path: "**", redirectTo: "auth" },
];
