import { PreloadAllModules, provideRouter, withComponentInputBinding, withPreloading } from '@angular/router';

import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding()), provideHttpClient()]
};
