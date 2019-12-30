import { Component, OnInit } from '@angular/core';

import { Time } from '../../../../models/appointment/time.model';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.scss'],
})
export class AddAppointmentComponent implements OnInit {
  public time: Time[];

  ngOnInit(): void {
    this.initializeTime();
  }

  private initializeTime(): void {
    this.time = [
      { value: '1', viewValue: '1' },
      { value: '2', viewValue: '2' },
      { value: '3', viewValue: '3' },
      { value: '4', viewValue: '4' },
      { value: '5', viewValue: '5' },
      { value: '6', viewValue: '6' },
      { value: '7', viewValue: '7' },
      { value: '8', viewValue: '8' },
      { value: '9', viewValue: '9' },
      { value: '10', viewValue: '10' },
      { value: '11', viewValue: '11' },
      { value: '12', viewValue: '12' },
    ];
  }
}
