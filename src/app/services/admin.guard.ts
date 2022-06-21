import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root',
})
export class AdminGuard implements CanActivate {
    public urlRedirect = '';

    constructor(private router: Router, private auth: AuthService) {}

    canActivate():
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        if (!this.auth.isAdmin()) {
            this.urlRedirect = '/login';
            window.location.href = '/login';
            return false;
        }
        this.urlRedirect = '';
        return true;
    }
}
