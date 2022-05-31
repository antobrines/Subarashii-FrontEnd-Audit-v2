import {environment} from 'src/environments/environment';
import {Component} from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
    public version;

    constructor() {
        this.version = environment.version;
    }
}
