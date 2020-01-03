import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { DoctorModel } from 'app/control-panel/models/Doctor/doctor.model';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoctorListComponent implements OnInit {
  @Input() doctors: DoctorModel[];
  constructor() {}

  ngOnInit(): void {}
}
