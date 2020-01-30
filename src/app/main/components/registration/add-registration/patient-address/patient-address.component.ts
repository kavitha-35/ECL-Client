import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-patient-address',
  templateUrl: './patient-address.component.html',
  styleUrls: ['./patient-address.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientAddressComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
