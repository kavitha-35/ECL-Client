import { Component, OnInit, Input } from '@angular/core';
import { AppointmentModel } from 'app/main/models/appointment/appointment.model';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent {
  @Input() public appointments       : AppointmentModel[];
}
