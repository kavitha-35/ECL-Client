import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { AddDoctorComponent } from './_dialogues/add-doctor/add-doctor.component';
import { EditDoctorComponent } from './_dialogues/edit-doctor/edit-doctor.component';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent {
  public isFetchingDoctor: boolean;
  matDialogConfig: MatDialogConfig = {
    disableClose: true,
    width: '1400px',
    panelClass: 'mat-dialogue-no-padding',
    height: '640px'
  };

  constructor(private readonly matDialog: MatDialog) {}

  public onAddDoctorButtonClicked(): void {
    this.matDialog
      .open(AddDoctorComponent, this.matDialogConfig)
      .afterClosed()
      .pipe(take(1))
  }

  public onEditDoctorClicked(): void {
    this.matDialog
      .open(EditDoctorComponent, this.matDialogConfig)
      .afterClosed()
      .pipe(take(1))
  }
}
