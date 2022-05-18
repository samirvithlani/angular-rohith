import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(): boolean {
    if(localStorage.getItem('dName')==null){

        this.router.navigateByUrl('/login')
      
    }
    return true;
  }



}
