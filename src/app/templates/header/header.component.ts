import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {firstValueFrom} from 'rxjs';
import {AuthService} from 'src/app/services/auth.service';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ResponseService} from '../../services/response.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
    search: string = '';
    notifications: any = [];
    user: any = [];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private authS: AuthService,
        private http: HttpClient,
        private responseS: ResponseService
    ) {
        this.route.queryParams.subscribe((params) => {
            this.search = params['search'];
        });
    }

    async getNotifications() {
        try {
            //const $get = this.http.get(environment.backUrl + 'notifications');
            //const data: any = await firstValueFrom($get);
            //return data.body;
            const json = [
                {
                    "type": "Notification 1",
                    "message": "Description notification 1"
                },
                {
                    "type": "Notification 2",
                    "message": "Description notification 2"
                }
            ];
            return json;
            
        } catch (error) {
            return this.responseS.ErrorF(error);
        }
    }

    async getUser() {
        return this.authS.userConnected();
    }


    async deleteNotification(id: number) {
        try {
            const $delete = this.http.delete(
                environment.backUrl + 'notification/' + id
            );
            const res: any = await firstValueFrom($delete);
            this.responseS.SuccessF(res);
            return true;
        } catch (error) {
            return this.responseS.ErrorF(error);
        }
    }

    async ngOnInit() {

        this.user = await this.getUser();
        this.notifications = await this.getNotifications();
        
    }

    onEnter() {
        this.router
            .navigate(['/'], {queryParams: {search: this.search}})
            .then(() => {
                window.location.reload();
            });
    }

    logout() {
        this.authS.logout();
    }
}
