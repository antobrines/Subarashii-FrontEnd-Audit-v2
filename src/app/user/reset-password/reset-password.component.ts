import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
    public key: string | null = '';
    public email = new FormControl();
    public password = new FormControl();
    public confirmPassword = new FormControl();

    constructor(
        private route: ActivatedRoute,
        private authS: AuthService,
        private router: Router
    ) {}

    async resetPassword() {
        const key = this.key;
        const email = this.email.value;
        const password = this.password.value;
        const confirmPassword = this.confirmPassword.value;
        await this.authS.resetPassword({
            key: key,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
        });
        this.router.navigate(['/login']);
    }

    ngOnInit(): void {
        this.route.queryParams.subscribe((params) => {
            this.key = params['key'];
        });
    }
}
