import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ChartData, ChartType, ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';
import { ResponseService } from '../../services/response.service';
import { environment } from 'src/environments/environment';
import { firstValueFrom } from 'rxjs';

@Component({
    selector: 'app-statistics',
    templateUrl: './statistics.component.html',
    styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent implements OnInit {
    @ViewChildren(BaseChartDirective) charts:
        | QueryList<BaseChartDirective>
        | undefined;

    public userStats: any = {};
    public animesLabels: any = [];
    public animesDatas: any = [];
    public genresLabels: any = [];
    public genresDatas: any = [];
    public colors: any = [
        '#22243a',
        '#822e2e',
        '#c66d00',
        '#634d72',
        '#2d1a2d',
        '#533253',
        '#B66734',
        '#AF561E',
    ];

    public animesStats: any = {};
    public commentsStats: any = {};
    public nbAnimes: number = 0;

    constructor(private http: HttpClient, private responseS: ResponseService) {}

    async getStatistics() {
        try {
            const $get = this.http.get(environment.backUrl + 'stats');
            const data: any = await firstValueFrom($get);
            return data.body;
        } catch (error) {
            return this.responseS.ErrorF(error);
        }
    }

    // Animes Doughnut

    public doughnutChartAnimesLabels: string[] = [];
    public doughnutChartAnimesData: ChartData<'doughnut'> = {
        labels: [],
        datasets: [],
    };

    public doughnutChartAnimesOptions: ChartConfiguration['options'] = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'right',
            },
        },
    };

    public doughnutChartAnimesType: ChartType = 'doughnut';

    // Genres Doughnut

    public doughnutChartGenresData: ChartData<'doughnut'> = {
        labels: [],
        datasets: [],
    };

    public doughnutChartGenresOptions: ChartConfiguration['options'] = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'right',
            },
        },
    };

    public doughnutChartGenresType: ChartType = 'doughnut';

    async ngOnInit() {
        this.userStats = await this.getStatistics();
        this.animesStats = this.userStats.animesStat;
        this.commentsStats = this.userStats.commentsStat;

        var keyAnimesStat;
        var keyGenresStat;

        for (keyAnimesStat in this.userStats.listAnimesStat) {
            const objAnimeStat = this.userStats.listAnimesStat[keyAnimesStat];
            this.animesLabels.push(objAnimeStat.name);
            this.animesDatas.push(objAnimeStat.nbAnime);

            this.nbAnimes += objAnimeStat.nbAnime;
        }

        this.doughnutChartAnimesData.labels = this.animesLabels;

        this.doughnutChartAnimesData.datasets.push({
            data: this.animesDatas,
            backgroundColor: this.colors,
            hoverBackgroundColor: this.colors,
            hoverBorderColor: this.colors,
        });

        for (keyGenresStat in this.userStats.genresStat) {
            const objGenreStat = this.userStats.genresStat[keyGenresStat];
            this.genresLabels.push(objGenreStat.name);
            this.genresDatas.push(objGenreStat.nbTime);
        }

        this.doughnutChartGenresData.labels = this.genresLabels;

        this.doughnutChartGenresData.datasets.push({
            data: this.genresDatas,
            backgroundColor: this.colors,
            hoverBackgroundColor: this.colors,
            hoverBorderColor: this.colors,
        });

        this.charts?.forEach((chart) => {
            chart.update();
        });
    }
}
