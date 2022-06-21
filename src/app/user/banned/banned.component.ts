import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-banned',
    templateUrl: './banned.component.html',
    styleUrls: ['./banned.component.css'],
})
export class BannedComponent {
    reason = '';
    constructor(private authS: AuthService) {
        this.reason = this.authS.reasonBan;
    }
}
