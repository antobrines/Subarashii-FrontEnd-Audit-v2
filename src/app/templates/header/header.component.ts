import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from 'src/app/services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
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

    async ngOnInit() {
    }

    onEnter() {
        this.router
            .navigate(['/'], {queryParams: {search: this.search}})
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
