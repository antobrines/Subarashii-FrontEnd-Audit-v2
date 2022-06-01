import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'subarashii';
    public showTemplate: boolean = true;
    private urls = ['/login', '/register'];

    constructor() {
        this.showTemplate = !this.urls.includes(location.pathname);
    }
}
