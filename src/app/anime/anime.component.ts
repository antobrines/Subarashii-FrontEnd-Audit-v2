import {AuthService} from 'src/app/services/auth.service';
import {CommentService} from './../services/comment.service';
import {ListService} from './../services/list.service';
import {DatePipe} from '@angular/common';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {AnimeService} from './../services/anime.service';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Meta , Title} from '@angular/platform-browser';

@Component({
    selector: 'app-anime',
    templateUrl: './anime.component.html',
    styleUrls: ['./anime.component.css'],
})
export class AnimeComponent implements OnInit {
    public anime: any = {};
    public idAnime: any = 0;
    public saisons: any[] = [];
    public episodesView: any[] = [];
    public userLists: any[] = [];
    public myAnimeIdSeeList: number[] = [];
    public comment = new FormControl('');
    public comments: any[] = [];
    public genres: any[] = [];
    public mappedGenres: any[] = [];
    public username: string = '';
    @ViewChild('episodesBtn') episodesBtn: ElementRef | undefined;
    @ViewChild('commentsBtn') commentsBtn: ElementRef | undefined;

    constructor(
        private animeS: AnimeService,
        private listS: ListService,
        private route: ActivatedRoute,
        private datePipe: DatePipe,
        private commentS: CommentService,
        private router: Router,
        private authS: AuthService,
        private metaService: Meta,
        private title:Title
    ) {
        this.idAnime = this.route.snapshot.paramMap.get('id');
    }

    async ngOnInit() {
        const data: any = await this.animeS.get(this.idAnime);
        console.log(data)
        this.anime = data.body;
        this.addTag()

        for (let index = 0; index < this.anime.number_of_seasons; index++) {
            this.saisons.push({
                nbSaison: index + 1,
                episodes: [],
            });
        }
        this.episodesView = Array.from(this.anime.episodesWatched,Number);
        this.genres = this.animeS.genres.filter((localGenre) => {
            return this.anime.genres.some((animeGenre:any) => animeGenre.id === localGenre.idApi);
        });
        this.mappedGenres = this.genres.map(genre => {return {id: genre.idApi}})

        await this.getMyList();
        console.log(this.userLists)
        this.myAnimeIdSeeList = await this.listS.myAnimeIdSeeList();
        this.router.events.subscribe((evt) => {
            if (evt instanceof NavigationEnd) {
                window.scrollTo(0, 0);
            }
        });
        const url = await this.router.url;
        const element = url.substring(url.indexOf('#') + 1);
        if (element == 'episodes') {
            this.episodesBtn?.nativeElement.click();
        }
        if (element == 'comments') {
            this.commentsBtn?.nativeElement.click();
        }  
    }

    changeDate(date: Date): any {
        return this.datePipe.transform(date, 'yyyy');
    }

    async getEpisodesSaison(nbSaison: number = 1) {
        if (this.saisons[nbSaison - 1].episodes.length == 0) {
            const data = await this.animeS.getEpisodesSaison(
                this.anime.id,
                nbSaison
            );
            this.saisons[nbSaison - 1].episodes = data;
        }
    }

    async changeStateViewEpisode(event: any, idEpisode: number,idList: number) {

        let usedListId
        if(idList <= 0 ){
            let idContainerList = await this.listS.getMyList(this.idAnime)
            if(idContainerList !== "TypeError: Cannot read properties of null (reading 'list')" && idContainerList){
                usedListId = idContainerList 
            }else{
                const toSeeList: any = this.userLists.filter((el) => el.label === 'À voir');
                await this.addAnimeList(this.anime.id,toSeeList[0]._id,this.mappedGenres);
                usedListId = toSeeList[0]._id                
            }
        }else{
            usedListId = idList
        }

        const data = await this.listS.changeStateViewEpisode(
            this.anime.id,
            idEpisode,
            usedListId,
            this.episodesView.find((ep:any) => ep === idEpisode) != undefined
        );
    
        this.episodesView = Array.from(data.episodesWatched,Number);

        const target = event.target;
        var element = target.getElementsByTagName('img')[0];
        if (target.tagName == 'IMG') {
            element = target;
        }
        if (data) {
            element.src = '../../assets/img/SVG/see.svg';
        } else {
            element.src = '../../assets/img/SVG/notseen.svg';
        }
    }

    async getMyList() {
        this.userLists = await this.listS.getMyList();
    }

    async addAnimeList(idAnime: number, idList: number,categories: Array<any>) {
        await this.listS.addAnimeList(idAnime,categories, idList);
        this.myAnimeIdSeeList.push(idAnime);
    }

    async getComment() {
        /**
         *   disabled 'till new comment routes

        this.username = this.authS.userConnected()?.username;
        this.comments = await this.commentS.getComment(this.idAnime);
        */
    }

    async addComment() {
        const data = {
            contenu: this.comment.value,
            idApiAnime: this.idAnime,
        };
        await this.commentS.addComment(data);
        this.comment.setValue('');
        this.getComment();
    }

    addTag() {
        this.metaService.addTag({ name: 'description', content: 'Infos de l\'anime ' + this.anime.original_name });
        this.metaService.addTag({ name: 'robots', content: 'index,follow' });
        this.metaService.addTag({ property: 'og:title', content: this.anime.original_name });
        this.title.setTitle(this.anime.original_name);
    }
}
