import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  // import the routes array from /app.routes
  providers: [provideRouter(routes), provideHttpClient(withFetch())],
};
