import { Component, OnInit } from '@angular/core';

import { AppointmentModel } from '../../../../models/appointment/appointment.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SharedLinkTestsComponent } from '../../../shared/_dialogues/shared-link-tests/shared-link-tests.component';
import { take } from 'rxjs/operators';
import { TestModel } from '../../../../models/tests/test.model';

@Component({
  selector: 'app-patient-collection-list',
  templateUrl: './appointments-collection-list.component.html',
  styleUrls: ['./appointments-collection-list.component.scss'],
})
export class AppointmentsCollectionListComponent implements OnInit {
  public displayedColumns           : string[];
  public appointments               : AppointmentModel[];
  public linkedTests                : TestModel[];
  private _matDialogConfig          : MatDialogConfig;

  constructor(private readonly _matDialog: MatDialog) {}

  ngOnInit(): void {
    this._initializeColumns();
    this._initializeMatDialogConfig();
    this._initializeAppointments();
  }

  private _initializeColumns(): void {
    this.displayedColumns = ['id', 'date', 'name', 'referral', 'organization', 'action'];
  }

  public onAddAdditionalTestsButtonClicked(): void {
    this._matDialog.open(SharedLinkTestsComponent, this._matDialogConfig)
                   .afterClosed()
                   .pipe(take(1))
                   .subscribe((linkedTests) => (this.linkedTests = linkedTests));
  }

  private _initializeAppointments(): void {
    // @ts-ignore
    this.appointments = [
      // @ts-ignore
      { id: '1', date: '12-12-2019', name: 'Arun Selva Kumar' },
      // @ts-ignore
      { id: '2', date: '16-12-2019', name: 'Prakash' },
      // @ts-ignore
      { id: '3', date: '22-12-2019', name: 'Sobin' },
      // @ts-ignore
      { id: '4', date: '27-12-2019', name: 'Zaheer' }
    ]
  }

  private _initializeMatDialogConfig(): void {
    this._matDialogConfig = {
      disableClose: true,
      width: '1400px',
      height: '540px',
      position: {
        top: '',
        bottom: '',
        left: '',
        right: '',
      },
    };
  }
}
