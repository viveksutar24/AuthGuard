import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminroleGuard implements CanActivate {
  constructor() { }
  canActivate() {
    if (localStorage.getItem("usertype") == "Admin")
      return true;
    else
      return false;
  }

}
