import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-chart',
  templateUrl: './sample-chart.component.html',
  styleUrls: ['./sample-chart.component.scss'],
})
export class SampleChartComponent {
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  public barChartLabels = ['micro-bio', 'nano-particles', 'macro-bio', 'analytical'];
  public barChartType = 'spline';
  public barChartLegend = true;
  public barChartData = [
    { data: [65, 59, 80, 81], label: 'This Week' },
    { data: [30, 70, 15, 100], label: 'Last Week' },
  ];
}
