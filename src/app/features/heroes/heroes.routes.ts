import { HeroUpdateComponent } from './pages/hero-update/hero-update.component';
import { Routes } from '@angular/router';
import { heroResolver } from './guards/hero.resolver';

export const HEROES_ROUTES: Routes = [
  // Use dynamic imports to load modules lazily
    {
      path: '',
      children: [
        {
          path: '',
          loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent),
        },
        {
          path: 'new',
          loadComponent: () => import('./pages/hero-new/hero-new.component').then(c => c.HeroNewComponent)
        },
        {
          path: 'update/:id',
          loadComponent: () => import('./pages/hero-update/hero-update.component').then(c => c.HeroUpdateComponent),
          resolve: { hero: heroResolver },
          canDeactivate:[(component: HeroUpdateComponent) => component.canDeactivate()]
        },
        {
          path: ':id',
          loadComponent: () => import('./pages/hero-detail/hero-detail.component').then(c => c.HeroDetailComponent),
          resolve: { hero: heroResolver },
        }
    ]
  }
];
