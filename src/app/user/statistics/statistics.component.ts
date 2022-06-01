import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ChartData, ChartType, ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

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

    constructor() {}

    async getStatistics() {
        return {
            commentsStat: {
                nbComments: 3,
                nbCommentsLiked: 2,
            },
            animesStat: {
                timeWatched: 100,
                nbEpisodesWatched: 3,
            },
            listAnimesStat: [
                {
                    name: 'A voir',
                    nbAnime: 50,
                },
                {
                    name: 'En cours',
                    nbAnime: 14,
                },
                {
                    name: 'En attente',
                    nbAnime: 34,
                },
                {
                    name: 'Terminés',
                    nbAnime: 29,
                },
            ],
            genresStat: [
                {
                    name: 'Fantastique',
                    nbTime: 41,
                },
                {
                    name: 'Drame',
                    nbTime: 31,
                },
                {
                    name: 'Comédie',
                    nbTime: 5,
                },
                {
                    name: 'Aventure',
                    nbTime: 51,
                },
            ],
        };
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
