import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { roleGuard } from './role.guard';

describe('roleGuard', () => {
  const executeGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => 
      TestBed.runInInjectionContext(() => roleGuard('admin')(route, state)); // Passer 'admin' comme rôle

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
  });

  it('should be created', () => {
    const route = {} as ActivatedRouteSnapshot; // Simuler un objet route
    const state = {} as RouterStateSnapshot;   // Simuler un objet state

    const result = executeGuard(route, state); // Appeler executeGuard avec les bons paramètres

    expect(result).toBeTruthy(); // Vérifier que la fonction retourne quelque chose
  });
});