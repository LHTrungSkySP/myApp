// src/app/auth/role-guard.service.ts
import { Injectable } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AuthenticationService } from '../Services/authentication.service';
@Injectable({ providedIn: 'root' })
export class RoleGuardService {
  constructor(
    public authenticationService: AuthenticationService,
    public router: Router
  ) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const currentUser = this.authenticationService.currentUserValue;
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data['role'];
    if (
      !this.authenticationService.currentUserValue ||
      currentUser?.role != expectedRole
    ) {
      this.router.navigate(['/403']);
      return false;
    }
    return true;
  }
}
