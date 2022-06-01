import { ResponseService } from './response.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import jwt_decode from 'jwt-decode';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(
        private http: HttpClient,
        private jwtHelper: JwtHelperService,
        private responseS: ResponseService
    ) {}

    async login(data: any): Promise<boolean> {
        try {
            const request = this.http.post(
                environment.backUrl + 'users/login',
                data
            );
            const dataRequest: any = await firstValueFrom(request);
            localStorage.setItem('token', dataRequest.body);
            this.responseS.SuccessF(dataRequest);
            return true;
        } catch (error: any) {
            if (error.error.message == 'Vous êtes banni') {
                window.location.href = '/banned';
            }
            this.responseS.ErrorF(error.error);
            return false;
        }
    }

    async register(data: any): Promise<boolean> {
        const request = this.http.post(
            environment.backUrl + 'users/register',
            data
        );
        try {
            const res = await firstValueFrom(request);
            this.responseS.SuccessF(res);
            return true;
        } catch (error: any) {
            this.responseS.ErrorF(error.error);
            return false;
        }
    }

    public isAuthenticated(): boolean {
        const token = this.jwtHelper.tokenGetter();
        if (token) return !this.jwtHelper.isTokenExpired(token);
        return false;
    }

    public logout() {
        localStorage.removeItem('token');
        window.location.href = '/login';
    }

    public userConnected(): any {
        const token: any = localStorage.getItem('token');
        const decodedToken: any = jwt_decode(token, { header: true });
        return decodedToken;
    }

    public async getUser() {
        try {
            const $get = this.http.get(environment.backUrl + 'users/me');
            const data: any = await firstValueFrom($get);
            return data.body;
        } catch (error) {
            return this.responseS.ErrorF(error);
        }
    }

    public async updateUser(dataForm: any) {
        try {
            const $put = this.http.put(environment.backUrl + 'users', dataForm);
            const res = await firstValueFrom($put);
            this.responseS.SuccessF(res);
            return true;
        } catch (error) {
            return this.responseS.ErrorF(error);
        }
    }

    public async updateUserPassword(dataForm: any) {
        try {
            const $put = this.http.put(
                environment.backUrl + 'users/password',
                dataForm
            );
            const res = await firstValueFrom($put);
            this.responseS.SuccessF(res);
            return true;
        } catch (error) {
            return this.responseS.ErrorF(error);
        }
    }

    public async forgotPassword(email: any) {
        try {
            const $post = this.http.post(
                environment.backUrl + 'users/password/reset/key',
                email
            );
            const res = await firstValueFrom($post);
            this.responseS.SuccessF(res);
            return true;
        } catch (error) {
            return this.responseS.ErrorF(error);
        }
    }

    public async resetPassword(email: any) {
        try {
            const $post = this.http.post(
                environment.backUrl + 'users/password/reset',
                email
            );
            const res = await firstValueFrom($post);
            this.responseS.SuccessF(res);
            return true;
        } catch (error) {
            return this.responseS.ErrorF(error);
        }
    }
}
