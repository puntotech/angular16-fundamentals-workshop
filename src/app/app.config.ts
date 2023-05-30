import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';

import { AuthEffects } from './features/auth/state/auth.effects';
import { loaderInterceptor } from './shared//interceptors/loader.interceptor';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { tokenInterceptor } from './shared/interceptors/token.interceptor';

const store = {
  router: routerReducer,
};
const effects: any[] = [AuthEffects];

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
  ]
};
