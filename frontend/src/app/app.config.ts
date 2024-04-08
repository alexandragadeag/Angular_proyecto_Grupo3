import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { route } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { jwtInterceptor } from './authentication/jwt.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(route),

  // Configurar HttpClientModule globalmente:
    // agregar jwtInterceptor para enviar token JWT a backend en peticiones HTTP
    provideHttpClient(withInterceptors([jwtInterceptor])),
  ]
  
};
