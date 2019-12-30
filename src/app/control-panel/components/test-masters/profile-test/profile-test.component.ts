import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { take } from 'rxjs/operators';
import { EditProfileTestComponent } from './_dialogues/edit-profile-test/edit-profile-test.component';
import { AddProfileTestComponent } from './_dialogues/add-profile-test/add-profile-test.component';
import { ProfileTestModel } from 'app/control-panel/models/test-master/profile-test/profile-test.model';

@Component({
  selector: 'app-profile-test',
  templateUrl: './profile-test.component.html',
  styleUrls: ['./profile-test.component.scss'],
})
export class ProfileTestComponent implements OnInit {
  public isFetchingProfileTests: boolean;
  matDialogConfig: MatDialogConfig = {
    disableClose: true,
    width: '1400px',
    panelClass: 'mat-dialogue-no-padding',
  };

  constructor(private readonly matDialog: MatDialog) {}

  ngOnInit(): void {}

  public onAddProfileTestButtonClicked(): void {
    this.matDialog
      .open(AddProfileTestComponent, this.matDialogConfig)
      .afterClosed()
      .pipe(take(1))
      .subscribe(() => {});
  }

  public onEditProfileTestClicked(testProfile: ProfileTestModel): void {
    this.matDialog
      .open(EditProfileTestComponent, this.matDialogConfig)
      .afterClosed()
      .pipe(take(1))
      .subscribe(() => {});
  }
}
