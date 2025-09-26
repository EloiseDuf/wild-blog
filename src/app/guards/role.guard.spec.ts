import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { roleGuard } from './role.guard';

describe('roleGuard', () => {
  const executeGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => 
      TestBed.runInInjectionContext(() => roleGuard('admin')(route, state));

  beforeEach(() => {
    TestBed.configureTestingModule({providers:[provideHttpClient()]});
  });

  it('should be created', () => {
    const route = {} as ActivatedRouteSnapshot;
    const state = {} as RouterStateSnapshot; 

    const result = executeGuard(route, state); 

    expect(result).toBeTruthy(); 
  });
});