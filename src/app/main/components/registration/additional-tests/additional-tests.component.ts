import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { RegistrationModel } from '../../../models/registration/registration.model';
import { RegistrationFacade } from '../../../state/registration/registration.facade';
import { SharedLinkTestsComponent } from '../../shared/_dialogues/shared-link-tests/shared-link-tests.component';

@Component({
  selector: 'app-additional-tests',
  templateUrl: './additional-tests.component.html',
  styleUrls: ['./additional-tests.component.scss'],
})
export class AdditionalTestsComponent implements OnInit {
  public registrations          : RegistrationModel[];

  constructor(
    private readonly _matDialog: MatDialog,
    private readonly _router: Router,
    private readonly registrationFacade: RegistrationFacade,
  ) {}

  ngOnInit(): void {
    this.registrationFacade.registrations$.subscribe((data) => {
      if (data) {
        this.registrations = data.filter((x) => x.status.name === 'Pending Accession');
      }
    });
  }

  public async onRegistrationSelected(selectedRegistrationModel: RegistrationModel): Promise<void> {
    await this._router.navigate(['/main/registration-details'], { queryParams: { id: selectedRegistrationModel.id } });
  }

  public onLinkButtonClicked(registrationModel: RegistrationModel): void {
    const matDialogConfig: MatDialogConfig = {
      panelClass: 'mat-dialogue-no-padding',
      width: '1400px',
    };

    this._matDialog.open(SharedLinkTestsComponent, matDialogConfig);
  }
}
