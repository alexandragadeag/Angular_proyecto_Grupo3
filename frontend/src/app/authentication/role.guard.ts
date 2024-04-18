import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

// Guard que sirve para proteger rutas en base a rol de usuario
// ng generate guard authentication/role

export const roleAdminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);

  // Si el usuario es administrador entonces puede entrar en la pantalla
  if (authService.getIsAdmin()){
    return true;
  } else {
    return router.navigate(['/login']); // si no es admin entonces redirige a login
  }

};



