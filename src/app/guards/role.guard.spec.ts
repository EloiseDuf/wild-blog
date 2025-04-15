import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { HttpClientTestingModule, provideHttpClientTesting } from '@angular/common/http/testing';

import { roleGuard } from './role.guard';

describe('roleGuard', () => {
  const executeGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => 
      TestBed.runInInjectionContext(() => roleGuard('admin')(route, state));

  beforeEach(() => {
    TestBed.configureTestingModule({providers:[provideHttpClientTesting]});
  });

  it('should be created', () => {
    const route = {} as ActivatedRouteSnapshot;
    const state = {} as RouterStateSnapshot; 

    const result = executeGuard(route, state); 

    expect(result).toBeTruthy(); 
  });
});