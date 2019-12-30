import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { TestsFacade } from '../../../../state/tests/tests.facade';
import { LinkTestModel } from '../../../../models/tests/link-test.model';
import { SharedLinkTestsComponent } from '../../../shared/_dialogues/shared-link-tests/shared-link-tests.component';

@Component({
  selector: 'app-patient-tests-information',
  templateUrl: './patient-tests-information.component.html',
  styleUrls: ['./patient-tests-information.component.scss']
})
export class PatientTestsInformationComponent implements OnInit {
  public linkedTests          : LinkTestModel[];

  constructor(private readonly _matDialog: MatDialog, private readonly _testsFacade: TestsFacade) {}

  ngOnInit(): void {
    this._testsFacade.searchResults$.subscribe((data) => (this.linkedTests = data));
  }

  public onAddLinkTestButtonClicked(): void {
    const matDialogConfig: MatDialogConfig = {
      panelClass: 'mat-dialogue-no-padding',
      width: '1400px',
      height: '540px',
    };

    this._matDialog.open(SharedLinkTestsComponent, matDialogConfig);
  }
}
