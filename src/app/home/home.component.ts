import {ListService} from '../services/list.service';
import {Component, OnInit} from '@angular/core';
import {AnimeService} from '../services/anime.service';
import {DatePipe} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';

import {firstValueFrom} from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    private page: number = 1;
    private search: any = {};
    private include_adult: boolean = false;
    private totalPage: number = 1;
    private url: string = '';
    private genders: string[] = ['16'];
    public dataObject: any = {};
    public animes: any = [];
    public toutPublic: boolean = true;
    public adult: boolean = false;
    public orderBy: string = 'original_title.asc';
    public isSearch: boolean = false;
    public genres: any = [];
    public loading: boolean = false;
    public myAnimeIdSeeList: number[] = [];
    public userLists: any = [];

    constructor(
        private apiA: AnimeService,
        private datePipe: DatePipe,
        private route: ActivatedRoute,
        private listS: ListService,
        private router: Router
    ) {
        this.route.queryParams.subscribe(async queryParams => {
            if (this.paramIsEmpty(queryParams['search'])) {
                this.isSearch = false;
                this.url = 'fullsearch';
            }
            await this.initData();
        });
    }

    async ngOnInit(): Promise<any> {
        await this.initData();
    }

    async initData() {
        this.resetValue();
        const params = await firstValueFrom(this.route.queryParams);
        const {search} = params;
        await this.getMyList();
        if (search && !this.paramIsEmpty(search)) {
            this.isSearch = true;
            this.url = 'search';
            await this.getAllAnime({query: search});
            this.myAnimeIdSeeList = await this.listS.myAnimeIdSeeList();
            return;
        }
        this.genres = this.apiA.genres;
        this.myAnimeIdSeeList = await this.listS.myAnimeIdSeeList();
        await this.getAllAnime(this.mergeObject());
    }

    async getAllAnime(data: any = {}) {
        this.loading = true;
        if(data?.status === undefined) delete data.status
        if (this.totalPage >= this.page) {
            try {
                const dataObject: any = await this.apiA.get(this.url, data);
                this.resetValue();
                this.animes = this.animes.concat(dataObject.body.results);
                this.totalPage = dataObject.body.total_pages;
                ++this.page;
            } catch (error) {
                this.loading = false;
            }
        }
    }

    async getMyList() {
        this.userLists = await this.listS.getMyList();
    }

    mergeObject() {
        return {
            ...{page: this.page},
            ...{adult: this.include_adult},
            ...{status: this.search.status},
            ...{categories: this.genders.join(',')},
        };
    }
    //...{sort_by: this.orderBy},
    //...{with_original_language: 'ja'},

    async onScroll() {
        await this.getAllAnime(this.mergeObject());
    }

    resetValue() {
        this.animes = [];
        this.page = 1;
    }

    async changeStatus(event: any, status: number) {
        this.resetValue();
        delete this.search.status;
        if (event.target.checked) {
            if (this.search.statusTarget) {
                this.search.statusTarget.checked = false;
            }
            this.search.statusTarget = event.target;
            this.search.status = status;
        } else {
            delete this.search.statusTarget;
        }
        await this.getAllAnime(this.mergeObject());
    }

    async changeRating(event: any) {
        this.resetValue();
        if (event.target.id == 'toutPublic') {
            if (event.target.checked) {
                this.include_adult = false;
                this.toutPublic = true;
                this.adult = false;
            } else {
                this.include_adult = true;
                this.toutPublic = false;
                this.adult = true;
            }
        }
        if (event.target.id == 'adulte') {
            if (event.target.checked) {
                this.include_adult = true;
                this.adult = true;
                this.toutPublic = false;
            } else {
                this.include_adult = false;
                this.toutPublic = true;
                this.adult = false;
            }
        }
        await this.getAllAnime(this.mergeObject());
    }

    changeDate(date: Date): any {
        return this.datePipe.transform(date, 'dd/MM/yyyy');
    }

    async addAnimeList(idAnime: number, idList: number, categories: Array<any>) {
        categories = categories.filter(catTmp => catTmp !== 16).map(cat => { 
            cat = this.apiA.genres.find(genre => genre.idApi == cat)
            if(cat !== undefined) cat = cat.name
            return cat
        })
        await this.listS.addAnimeList(idAnime,categories, idList);
        this.myAnimeIdSeeList.push(idAnime);
    }

    async filterGender(event: any) {
        this.resetValue();
        const idApi = event.target.htmlFor;
        if (!this.genders.includes(idApi)) {
            this.genders.push(idApi);
        } else {
            this.genders.splice(this.genders.indexOf(idApi), 1);
        }
        await this.getAllAnime(this.mergeObject());
    }

    paramIsEmpty(param: any) {
        return param !== undefined && (param === null || param.match(/^ *$/) !== null)
    }
}
