import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild, CanActivate {
  constructor(private router: Router, private auth: AuthService){}

  canActivateChild(
    actualRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.auth.isLoggedIn){
        return false;

      }else if(this.auth.isLoggedOut){
        this.auth.logout();
        this.router.navigate([''])
      }
      return true
  }
  canActivate(
    actualRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if( this.auth.hasUser() && this.auth.hasToken  && this.auth.isLoggedIn){
        return false;

      }
      return true
  }
}
