import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { TestsFacade } from '../../../../state/tests/tests.facade';
import { LinkTestModel } from '../../../../models/tests/link-test.model';
import { SharedLinkTestsComponent } from '../../../shared/_dialogues/shared-link-tests/shared-link-tests.component';
import { CombinedTestService } from 'app/control-panel/services/combinedtest.service';
import { CombinedTestModel } from 'app/control-panel/models/test-master/combined-test/combined-test.model';

@Component({
  selector: 'app-patient-tests-information',
  templateUrl: './patient-tests-information.component.html',
  styleUrls: ['./patient-tests-information.component.scss']
})
export class PatientTestsInformationComponent implements OnInit {
  // public linkedTests          : LinkTestModel[];
  public combinedTestData          : CombinedTestModel[];
  public searchQuery : string;
  isBusy: boolean;

  constructor(
    private readonly _matDialog: MatDialog, 
    // private readonly _testsFacade: TestsFacade
    private readonly _combinedTestService: CombinedTestService
    ) {}

  ngOnInit(): void {
    // this._testsFacade.searchResults$.subscribe((data) => (this.linkedTests = data));
    this.getAllCombinedTest();
  }

  // public onAddLinkTestButtonClicked(): void {
  //   const matDialogConfig: MatDialogConfig = {
  //     panelClass: 'mat-dialogue-no-padding',
  //     width: '1400px',
  //     height: '540px',
  //   };

  //   this._matDialog.open(SharedLinkTestsComponent, matDialogConfig);
  // }

  public getAllCombinedTest(): void {
    this.isBusy = true;
    this._combinedTestService.getAllTests().subscribe((data: CombinedTestModel[]) => {
      console.log('combined test result', data);
      this.combinedTestData = data;
      this.isBusy = false;
    });
  }

  public searchFromCombinedTestData(): void {
    console.log('search query', this.searchQuery);
    if(!this.searchQuery) {
      return;
    }
    this.combinedTestData = this._filter(this.searchQuery);
  }

  private _filter(value: string): CombinedTestModel[] {
    const filterValue = value.toLowerCase();
    return this.combinedTestData.filter((option) => option.testName.toLowerCase().includes(filterValue));
  }
}
