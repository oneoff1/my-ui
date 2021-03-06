import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './services/index';
 
@Injectable()
export class AuthGuard implements CanActivate {
 
    constructor(private router: Router, private authSrv: AuthService) { }
 
    canActivate() {        
        if (!this.authSrv.isExpired()) {
            // logged in so return true
            return true;
        }
 
        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    }
}