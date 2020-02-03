import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AppointmentServices } from 'app/main/services/appointment.services';

@Component({
  selector: 'app-management-information',
  templateUrl: './management-information.component.html',
  styleUrls: ['./management-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementInformationComponent implements OnInit {
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  public barChartLabels = ['01-03-20', '02-03-20', '03-03-20', '04-03-20', '05-03-20', '06-03-20', '07-03-20'];
  public barChartType = 'bar';
  public pieChartType = 'pie';
  public barChartLegend = true;
  public barChartData = [
    { data: [12, 59, 80, 81, 90, 20, 21], label: 'Pending' },
    { data: [30, 70, 15, 100, 80, 90, 30], label: 'Completed' },
  ];

  constructor(private readonly appointmentService: AppointmentServices) {}

  ngOnInit(): void {}
}
