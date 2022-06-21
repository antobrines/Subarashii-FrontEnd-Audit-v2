import { Component, OnInit } from '@angular/core';
import { AdminService } from './../services/admin.service';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-administration',
    templateUrl: './administration.component.html',
    styleUrls: ['./administration.component.css'],
})
export class AdministrationComponent implements OnInit {
    public users: any[] = [];
    public currentParams: any = {};
    public userComments: any[] = [];
    public userIdSelected = '';
    public userNameSelected = '';
    public reason = new FormControl();
    public duration = new FormControl();

    constructor(private adminS: AdminService) {}

    async getUsers(page: number) {
        this.users = [];
        const users: any = await this.adminS.getUsers(page, 5);
        this.users = users.docs;
        delete users.docs;
        this.currentParams = users;
    }

    async getUser() {
        return await this.adminS.getUser(this.userIdSelected);
    }

    getUserSelected(userId: string, userName: string) {
        this.userIdSelected = userId;
        this.userNameSelected = userName;
    }

    async getUserComments(userId: string, userName: string) {
        this.userIdSelected = userId;
        this.userNameSelected = userName;
        this.userComments = await this.adminS.getUserComments(userId);
    }

    changeDurationIntoDate(duration: any) {
        let currentDate = new Date();

        currentDate.setDate(currentDate.getDate() + parseInt(duration));
        if (duration == -1) {
            currentDate = new Date('01/01/3000');
        }

        return currentDate;
    }

    async deleteComment(commentId: string) {
        await this.adminS.deleteComment(commentId);
        this.getUserComments(this.userIdSelected, this.userNameSelected);
    }

    async banUser() {
        const reason = this.reason.value;
        const duration: number = this.duration.value;
        const date = this.changeDurationIntoDate(duration).toString();

        await this.adminS.banUser(this.userIdSelected, date, reason);
        const user: any = await this.getUser();

        this.users = this.users.map((el) => {
            if (el._id == user._id) {
                console.log(el);
                return user;
            }
            return el;
        });
    }

    async unbanUser() {
        await this.adminS.unbanUser(this.userIdSelected);
        const user: any = await this.getUser();

        this.users = this.users.map((el) => {
            if (el._id == user._id) {
                return user;
            }
            return el;
        });
    }

    async nextPage() {
        const nextPage = this.currentParams.nextPage;
        if (nextPage != null) {
            await this.getUsers(nextPage);
        }
    }

    async previousPage() {
        const previousPage = this.currentParams.prevPage;
        if (previousPage != null) {
            await this.getUsers(previousPage);
        }
    }

    async ngOnInit() {
        await this.getUsers(1);
    }
}
