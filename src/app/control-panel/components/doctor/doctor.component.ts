import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialogConfig, MatDialog, PageEvent } from '@angular/material';
import { AddDoctorComponent } from './_dialogues/add-doctor/add-doctor.component';
import { EditDoctorComponent } from './_dialogues/edit-doctor/edit-doctor.component';
import { take } from 'rxjs/operators';
import { DoctorModel } from 'app/control-panel/models/Doctor/doctor.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DISPLAY_MODE } from 'app/main/models/constants';
import { DoctorService } from 'app/control-panel/services/doctor.service';

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
    private readonly _doctorService: DoctorService,
    private readonly cRef: ChangeDetectorRef,
  ) {
    this.pageEvent = { pageIndex: 0, pageSize: 10 } as PageEvent;
    this.pageSizeOptions = [10, 25, 50, 100];
  }

  ngOnInit(): void {
    this.getAllDoctor();
    this._activatedRoute.queryParams.subscribe((queryParams) => {
      this.showListView = queryParams['view'] === DISPLAY_MODE.LIST;
    });
  }

  public onAddDoctorButtonClicked(): void {
    this.matDialog
      .open(AddDoctorComponent, this.matDialogConfig)
      .afterClosed()
      .pipe(take(1))
      .subscribe(() => {
        this.getAllDoctor();
      });
  }

  public onEditDoctorButtonClicked(doctor: DoctorModel): void {
    const matDialogConfig: MatDialogConfig = {
      panelClass: 'mat-dialogue-no-padding',
      width: '1400px',
      autoFocus: false,
      data: doctor,
    };
    this.matDialog
      .open(EditDoctorComponent, matDialogConfig)
      .afterClosed()
      .pipe(take(1))
      .subscribe(() => {
        this.getAllDoctor();
      });
  }

  public onShowListViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.LIST } });
  }

  public onShowTableViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.TABLE } });
  }

  public getAllDoctor(): void {
    this.isFetchingDoctors = true;
    this._doctorService.getAllDoctor().subscribe((data) => {
      this.doctors = data;
      this.isFetchingDoctors = false;
      this.cRef.detectChanges();
    });
  }

   public onDeleteTestClicked(id: string): void {
    this._doctorService.deleteDoctor(id).subscribe(() => {
      this.getAllDoctor();
    });
   }
}
