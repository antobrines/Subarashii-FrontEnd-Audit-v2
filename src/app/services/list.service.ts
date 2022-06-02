import {firstValueFrom} from 'rxjs';
import {environment} from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ResponseService} from './response.service';

@Injectable({
    providedIn: 'root',
})
export class ListService {
    constructor(private http: HttpClient, private responseS: ResponseService) {
    }

    async getMyList() {
        try {
            const $get = this.http.get(environment.backUrl + 'lists');
            const data: any = await firstValueFrom($get);
            return data.body;
        } catch (error) {
            return this.responseS.ErrorF(error);
        }
    }

    async addList(dataForm: any) {
        try {
            const $post = this.http.post(environment.backUrl + 'lists', dataForm);
            const res = await firstValueFrom($post);
            this.responseS.SuccessF(res);
            return true;
        } catch (error) {
            return this.responseS.ErrorF(error);
        }
    }

    async addAnimeList(idAnime: number, categories: Array<any>, idList: number = -1) {
        try {
            if (idList == -1) {
                const myList = await this.getMyList();
                idList = myList[0].id;
            }
            const json = {
                animeId: String(idAnime),
                animeCategories: categories.map(String)
            };
            
            const $patch = this.http.patch(
                environment.backUrl + 'lists/' + idList + '/anime/add',
                json,
            );
            const res = await firstValueFrom($patch);
            this.responseS.SuccessF(res);
            return true;
        } catch (error) {
            return this.responseS.ErrorF(error);
        }
    }

    async myAnimeIdSeeList() {
        try {
            const $get = this.http.get(environment.backUrl + 'lists/animes');
            const data: any = await firstValueFrom($get);
            return data.body;
        } catch (error) {
            return this.responseS.ErrorF(error);
        }
    }

    async changeStateViewEpisode(idAnime: number, idEpisode: number) {
        try {
            const put$ = this.http.put(
                environment.backUrl +
                'views/animes/' +
                idAnime +
                '/episodes/' +
                idEpisode,
                null
            );
            const data: any = await firstValueFrom(put$);
            return data.body;
        } catch (error) {
            return this.responseS.ErrorF(error);
        }
    }

    async getEpisodeViews(idAnime: number) {
        try {
            const $get = this.http.get(
                environment.backUrl + 'views/animes/' + idAnime
            );
            const data: any = await firstValueFrom($get);
            return data.body;
        } catch (error) {
            return this.responseS.ErrorF(error);
        }
    }

    async getAnimeList(idList: number) {
        try {
            const $get = this.http.get(
                environment.backUrl + 'lists/' + idList + '/animes'
            );
            const data: any = await firstValueFrom($get);
            return data.body;
        } catch (error) {
            return this.responseS.ErrorF(error);
        }
    }

    async deleteList(idList: number) {
        try {
            const $delete = this.http.delete(
                environment.backUrl + 'lists/' + idList
            );
            const res: any = await firstValueFrom($delete);
            this.responseS.SuccessF(res);
            return true;
        } catch (error) {
            return this.responseS.ErrorF(error);
        }
    }

    async deleteAnimeList(idAnime: number, idList: number) {
        try {
            const $delete = this.http.delete(
                environment.backUrl + 'lists/' + idList + '/anime/' + idAnime
            );
            const res: any = await firstValueFrom($delete);
            this.responseS.SuccessF(res);
            return true;
        } catch (error) {
            return this.responseS.ErrorF(error);
        }
    }
}
