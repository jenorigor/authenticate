import { Injectable } from '@angular/core';
import { Routes, Router, RouterModule, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  /*canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }*/

  constructor(public router: Router) {}

  canActivate() : boolean {
  	 if(localStorage.getItem("loggedinUser") === null) {
  	 	this.router.navigate(['*']);
      	return false;
  	 }

  	 return true;
  }
}
