import { ResponseService } from './response.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AdminService {
    constructor(private http: HttpClient, private responseS: ResponseService) {}

    async getUsers(pageNb: number, limit: number, search = '') {
        let params = new HttpParams();
        params = params.append('page', pageNb);
        params = params.append('limit', limit);
        params = params.append('search', search);
        const get$ = this.http.get(environment.backUrl + 'users/all', {
            params: params,
        });
        const data: any = await firstValueFrom(get$);

        console.log(data);

        return data.body;
    }

    async getUser(userId: string) {
        const $get = this.http.get(
            environment.backUrl + 'users/ban-informations/' + userId
        );
        const data: any = await firstValueFrom($get);
        console.log(data);
        return data.body;
    }

    async getUserComments(userId: string) {
        const get$ = this.http.get(environment.backUrl + 'comments/' + userId);
        const data: any = await firstValueFrom(get$);
        return data.body;
    }

    async deleteComment(commentId: string) {
        try {
            const $delete = this.http.delete(
                environment.backUrl + 'comments/remove/' + commentId
            );
            const res: any = await firstValueFrom($delete);
            this.responseS.SuccessF(res);
            return true;
        } catch (error) {
            return this.responseS.ErrorF(error);
        }
    }

    async banUser(idUser: string, date: string, reason: string) {
        const json = {
            date,
            reason,
        };
        const patch$ = this.http.patch(
            environment.backUrl + 'users/ban/' + idUser,
            json
        );
        const data: any = await firstValueFrom(patch$);
        return data.body;
    }

    async unbanUser(idUser: string) {
        const patch$ = this.http.patch(
            environment.backUrl + 'users/unban/' + idUser,
            {
                params: null,
            }
        );
        const data: any = await firstValueFrom(patch$);
        return data.body;
    }
}
