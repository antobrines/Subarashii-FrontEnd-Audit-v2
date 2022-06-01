import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ResponseService } from '../../services/response.service';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
    search: string = '';
    notifications: any = [];
    user: any = [];
    public username = new FormControl();
    public email = new FormControl();
    public previousPassword = new FormControl();
    public password = new FormControl();
    public confirmPassword = new FormControl();

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
        return this.authS.getUser();
    }

    async updateUser() {
        const username = this.username.value;
        const email = this.email.value;
        await this.authS.updateUser({
            username: username,
            email: email,
        });
        await this.getUser();
    }

    async updateUserPassword() {
        const previousPassword = this.previousPassword.value;
        const password = this.password.value;
        const confirmPassword = this.confirmPassword.value;
        await this.authS.updateUserPassword({
            previousPassword: previousPassword,
            password: password,
            confirmPassword: confirmPassword,
        });
        await this.getUser();
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
        this.username.setValue(this.user.username);
        this.email.setValue(this.user.email);
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
