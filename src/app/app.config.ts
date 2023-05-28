import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { ApplicationConfig } from '@angular/core';
import { loaderInterceptor } from './shared//interceptors/loader.interceptor';
import { routes } from './app.routes';
import { tokenInterceptor } from './shared/interceptors/token.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
      provideRouter(routes, withComponentInputBinding()),
      provideHttpClient(withInterceptors([tokenInterceptor, loaderInterceptor])),
  ]
};
