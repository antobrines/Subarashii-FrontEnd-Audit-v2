import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ResponseService } from '../../services/response.service';

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
        return [
            {
                type: 'Notification 1',
                message: 'Description notification 1',
            },
            {
                type: 'Notification 2',
                message: 'Description notification 2',
            },
        ];
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
            .navigate(['/'], { queryParams: { search: this.search } })
            .then();
    }

    logout() {
        this.authS.logout();
    }

    resetSearch() {
        this.search = '';
        this.onEnter();
    }
}
