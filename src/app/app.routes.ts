import { Routes } from '@angular/router';

export const routes: Routes = [
  // Use dynamic imports to load modules lazily

  /* TODO 502 - Configura las rutas que carguen las páginas:
     hero/new --> /pages/hero/hero-new
     hero/udpate:id --> /pages/hero-update/hero-update
     hero/:id -> pages/hero/hero-detail/hero-detail.component
  */
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)
  },
  {
    path: 'hero',
    children: [
    /* TODO 502 - Configura las rutas que carguen las páginas:
      hero/new --> /pages/hero/hero-new
      hero/udpate:id --> /pages/hero-update/hero-update
      hero/:id -> pages/hero/hero-detail/hero-detail.component
    */
    ],
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        loadComponent: () => import('./pages/auth/login/login.component').then(c => c.LoginComponent)
      },
      {
        path: 'register',
        loadComponent: () => import('./pages/auth/register/register.component').then(c => c.RegisterComponent),
      }
    ],
  },
  { path: "**", redirectTo: "home" },
];
