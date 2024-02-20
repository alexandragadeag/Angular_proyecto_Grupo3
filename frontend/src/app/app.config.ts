import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { route } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(route)]
};
