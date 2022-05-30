import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType, ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

    // Animes Doughnut
    
    public doughnutChartAnimesLabels: string[] = [ "A voir", "En cours", "En attente", "Terminés" ];
    public doughnutChartAnimesData: ChartData<'doughnut'> = {
      labels: this.doughnutChartAnimesLabels,
      datasets: [
        { data: [ 350, 450, 100, 231 ],
          backgroundColor: ['#22243a', '#822e2e', '#c66d00', '#634d72', '#2d1a2d', '#533253', '#B66734', '#AF561E'],
          hoverBackgroundColor: ['#22243a', '#822e2e', '#c66d00', '#634d72', '#2d1a2d', '#533253', '#B66734', '#AF561E'],
          hoverBorderColor: ['#22243a', '#822e2e', '#c66d00', '#634d72', '#2d1a2d', '#533253', '#B66734', '#AF561E']
        }
      ]
    };

    public barChartAnimesOptions: ChartConfiguration['options'] = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
        }
      }
    };
    
    public doughnutChartAnimesType: ChartType = 'doughnut';

    // Genres Doughnut
    
    public doughnutChartGenresLabels: string[] = [ "Fantastique", "Drame", "Comédie", "Aventure" ];
    public doughnutChartGenresData: ChartData<'doughnut'> = {
      labels: this.doughnutChartGenresLabels,
      datasets: [
        { data:[ 42, 31, 5, 51 ],
          backgroundColor: ['#22243a', '#822e2e', '#c66d00', '#634d72', '#2d1a2d', '#533253', '#B66734', '#AF561E'],
          hoverBackgroundColor: ['#22243a', '#822e2e', '#c66d00', '#634d72', '#2d1a2d', '#533253', '#B66734', '#AF561E'],
          hoverBorderColor: ['#22243a', '#822e2e', '#c66d00', '#634d72', '#2d1a2d', '#533253', '#B66734', '#AF561E']
        }
          
      ]
    };

    public barChartGenresOptions: ChartConfiguration['options'] = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
        }
      }
    };
    
    public doughnutChartGenresType: ChartType = 'doughnut';
    
  
    // events
    public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
      console.log(event, active);
    }
  
    public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
      console.log(event, active);
    }

    ngOnInit() {
        
    }

}
