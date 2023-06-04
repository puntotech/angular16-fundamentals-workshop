import { ApplicationConfig, isDevMode } from '@angular/core';
import { AuthEffects, authReducer } from './features/auth/state/';
import { HeroesEffects, heroesReducer } from './features/heroes/state/';
import { loaderInterceptor, tokenInterceptor } from './shared/interceptors';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';

import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';

const store = {
  router: routerReducer,
  auth: authReducer,
  heroes: heroesReducer,
};
const effects: any[] = [AuthEffects, HeroesEffects];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptors([tokenInterceptor, loaderInterceptor])),
    provideStore(store),
    provideRouterStore(),
    provideStoreDevtools({
        maxAge: 25,
        logOnly: isDevMode(),
    }),
    provideEffects(effects)
]
};
