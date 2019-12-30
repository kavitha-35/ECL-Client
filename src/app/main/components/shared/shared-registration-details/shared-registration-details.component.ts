import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RegistrationModel } from '../../../models/registration/registration.model';
import { RegistrationFacade } from '../../../state/registration/registration.facade';

@Component({
  selector: 'app-shared-registration-details',
  templateUrl: './shared-registration-details.component.html',
  styleUrls: ['./shared-registration-details.component.scss'],
})
export class SharedRegistrationDetailsComponent implements OnInit {
  public registrationDetail         : RegistrationModel;

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _registrationFacade: RegistrationFacade,
  ) {}

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe((query) => {
      const registrationId = query['id'];
      this._registrationFacade.registrations$.subscribe((data) => {
        this.registrationDetail = data.find((x) => x.id === registrationId)
      });
    });
  }
}
