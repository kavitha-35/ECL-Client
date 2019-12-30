import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { RegistrationModel } from '../../../models/registration/registration.model';
import { RegistrationFacade } from '../../../state/registration/registration.facade';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.scss'],
})
export class RegistrationListComponent implements OnInit {
  public pageSizeOptions      : number[];
  public pageEvent            : PageEvent;
  public registrations$       : Observable<RegistrationModel[]>;

  constructor(
    private readonly _router: Router,
    private readonly _registrationFacade: RegistrationFacade) {
    this.pageEvent = { pageIndex: 0, pageSize: 10 } as PageEvent;
    this.pageSizeOptions = [10, 25, 50, 100];
  }

  ngOnInit(): void {
    this.registrations$ = this._registrationFacade.registrations$;
    this._registrationFacade.loadRegistrations();
  }

  public async onRegistrationSelected(selectedRegistrationModel: RegistrationModel): Promise<void> {
    await this._router.navigate(['/main/registration-details'], { queryParams: { id: selectedRegistrationModel.id } });
  }
}
