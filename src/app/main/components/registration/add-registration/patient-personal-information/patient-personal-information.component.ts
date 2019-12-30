import { Component, Input, OnDestroy } from '@angular/core';

import { AddPatientRequestModel } from '../../../../models/patient/registration/add-patient-request.model';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-personal-information.component.html',
  styleUrls: ['./patient-personal-information.component.scss'],
})
export class PatientPersonalInformationComponent implements OnDestroy {
  @Input() public isReVisitRegistration            : boolean;
  public addPatientRequest                         : AddPatientRequestModel = {} as AddPatientRequestModel;

  constructor() {}

  ngOnDestroy(): void {}
}
