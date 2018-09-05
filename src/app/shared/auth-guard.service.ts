import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { StorageService } from './storage.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private _router: Router, private _storageService: StorageService) {
    
    window.addEventListener('storage', function (event) {
      
      if (!_storageService.isLoggedIn())
        _router.navigate(['login']);
    });
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this._storageService.isLoggedIn())
      return true;

    this._router.navigate(['login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
