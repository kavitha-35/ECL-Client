import { Component, OnInit } from '@angular/core';

import { RegistrationFacade } from '../../../state/registration/registration.facade';
import { RegistrationModel } from '../../../models/registration/registration.model';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent implements OnInit {
  public registrations              : RegistrationModel[];

  constructor(private readonly _registrationFacade: RegistrationFacade) {}

  ngOnInit(): void {
    this._registrationFacade.registrations$.subscribe(data => {
      this.registrations = data.filter(x => x.status.name === 'Completed');
    })
  }
}
