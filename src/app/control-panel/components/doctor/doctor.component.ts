import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog, PageEvent } from '@angular/material';
import { AddDoctorComponent } from './_dialogues/add-doctor/add-doctor.component';
import { EditDoctorComponent } from './_dialogues/edit-doctor/edit-doctor.component';
import { take } from 'rxjs/operators';
import { DoctorModel } from 'app/control-panel/models/Doctor/doctor.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DISPLAY_MODE } from 'app/main/models/constants';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss'],
})
export class DoctorComponent implements OnInit {
  public doctors: DoctorModel[];
  public showListView: boolean;
  public pageEvent: PageEvent;
  public pageSizeOptions: number[];
  public isFetchingDoctors: boolean;

  matDialogConfig: MatDialogConfig = {
    panelClass: 'mat-dialogue-no-padding',
    width: '1400px',
    autoFocus: false,
  };

  constructor(
    private readonly matDialog: MatDialog,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router,
  ) {
    this.pageEvent = { pageIndex: 0, pageSize: 10 } as PageEvent;
    this.pageSizeOptions = [10, 25, 50, 100];
  }

  ngOnInit(): void {
    this._initializeValues();
    this._activatedRoute.queryParams.subscribe((queryParams) => {
      this.showListView = queryParams['view'] === DISPLAY_MODE.LIST;
    });
  }

  public onAddDoctorButtonClicked(): void {
    this.matDialog
      .open(AddDoctorComponent, this.matDialogConfig)
      .afterClosed()
      .pipe(take(1))
      .subscribe(() => {});
  }

  public onEditDoctorButtonClicked(): void {
    this.matDialog
      .open(EditDoctorComponent, this.matDialogConfig)
      .afterClosed()
      .pipe(take(1))
      .subscribe(() => {});
  }

  public onShowListViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.LIST } });
  }

  public onShowTableViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.TABLE } });
  }

  public onDeleteTestClicked(testId: string): void {}

  public _initializeValues(): void {
    this.doctors = [
      {
        id: '1',
        designation: 'DR',
        doctorName: 'vincy scaria',
        emailId: 'v.scaria@ecl.ae',
        address: '105, barsha road',
        telephone: '554541234',
        zipCode: '97756',
        area: 'dubai',
        country: 'UAE',
        dateOfBirth: '27/02/1985',
        dateofAnniversary: '12/01/2017',
        doctorPassKey: '89765',
        doctorSpeciality: 'immunology',
        department: 'immunology',
        visitingDays: 'mon to fri',
        remarks: 'string',
        signature: {
          signatureImage: 'jpg',
        },
        login: {
          userName: 'scariaecl',
          password: 'eclvincy@123',
        },
      },
    ];
  }
}
