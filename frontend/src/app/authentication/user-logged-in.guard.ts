import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

/*
Si el usuario tiene Token JWT entonces puede pasar, independientemente de su rol.

Si el usuario no tiene Token JWT entonces se redirige a login.
*/
export const userLoggedInGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);

  if (authService.hasToken()){
    return true;
  } else {
    return router.navigate(['/login']);
  }

};