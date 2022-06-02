import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from 'src/app/services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
    search: string = '';

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private authS: AuthService
    ) {
        this.route.queryParams.subscribe((params) => {
            this.search = params['search'];
        });
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
