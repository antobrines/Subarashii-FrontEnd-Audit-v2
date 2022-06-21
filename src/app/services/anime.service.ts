import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AnimeService { 
    public genres = [{
        "id":1,
        "idApi": 10759,
        "name": "Action & Adventure",
        "nom": "Action & Aventures"
    },
    {
        "id":3,
        "idApi": 35,
        "name": "Comedy",
        "nom": "Comedy"
    },
    {
        "id":4,
        "idApi": 80,
        "name": "Crime",
        "nom": "Crime"
    },
    {
        "id":5,
        "idApi": 99,
        "name": "Documentary",
        "nom": "Documentaire"
    },
    {
        "id":6,
        "idApi": 18,
        "name": "Drama",
        "nom": "Drame"
    },
    {
        "id":7,
        "idApi": 10751,
        "name": "Family",
        "nom": "Famille"
    },
    {
        "id":8,
        "idApi": 10762,
        "name": "Kids",
        "nom": "Kids",
    },
    {
        "id":9,
        "idApi": 9648,
        "name": "Mystery",
        "nom":"Mystère"
    },
    {
        "id":10,
        "idApi": 10763,
        "name": "News",
        "nom": "News"
    },
    {
        "id":11,
        "idApi": 10764,
        "name": "Reality",
        "nom":"Réalité"
    },
    {
        "id":12,
        "idApi": 10765,
        "name": "Sci-Fi & Fantasy",
        "nom": "Science-fiction & Fantastique"
    },
    {
        "id":13,
        "idApi": 10766,
        "name": "Soap",
        "nom":"Soap"
    },
    {
        "id":14,
        "idApi": 10767,
        "name": "Talk",
        "nom": "Talk"
    },
    {
        "id":15,
        "idApi": 10768,
        "name": "War & Politics",
        "nom": "Guerre & politiques"
    },
    {
        "id":16,
        "idApi": 37,
        "name": "Western",
        "nom": "Western"
    }]
    /*
    {
        "id":2,
        "idApi": 16,
        "name": "Animation",
        "nom": "Animation"
    },
    */

    constructor(private http: HttpClient) {
    }

    async get(url: string, search: any = {}) {
        const params = {
            params: search,
        };
        const get$ = this.http.get(environment.apiAnimeUrl + url, params);
        const data = await firstValueFrom(get$);
        return data;
    }

    async getGenres(id: number = -1) {
        const get$ = this.http.get(environment.backUrl + 'genres/all');
        const data: any = await firstValueFrom(get$);
        data.body = data.body.filter((el: any) => {
            if (el.id != 2) {
                return el;
            }
        });
        return data;
    }

    async getEpisodesSaison(idAnime: number, idSaison: number) {
        const get$ = this.http.get(
            environment.apiAnimeUrl + idAnime + '/season/' + idSaison
        );
        const data: any = await firstValueFrom(get$);
        return data.body;
    }
}
