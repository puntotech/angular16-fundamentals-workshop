import { provideRouter, withComponentInputBinding } from '@angular/router';

import { ApplicationConfig } from '@angular/core';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding())]
};
