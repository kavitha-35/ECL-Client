import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { REGISTRATION_ROUTER_ACTIONS } from '../../../models/constants';
import { TestsFacade } from '../../../state/tests/tests.facade';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
})
export class RegistrationComponent implements OnInit {
  public isReVisitRegistration          : boolean;

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _testsFacade: TestsFacade
  ) {}

  ngOnInit(): void {
    this._testsFacade.loadLinkSearchResults();
    this._activatedRoute.queryParams
                        .subscribe(queryParams => {
                          this.isReVisitRegistration = queryParams['action'] === REGISTRATION_ROUTER_ACTIONS.ReVisitRegistration;
                        });
  }
}
