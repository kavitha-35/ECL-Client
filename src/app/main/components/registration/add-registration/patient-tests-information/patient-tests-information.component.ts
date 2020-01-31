import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { TestsFacade } from '../../../../state/tests/tests.facade';
import { LinkTestModel } from '../../../../models/tests/link-test.model';
import { SharedLinkTestsComponent } from '../../../shared/_dialogues/shared-link-tests/shared-link-tests.component';
import { CombinedTestService } from 'app/control-panel/services/combinedtest.service';
import { CombinedTestModel } from 'app/control-panel/models/test-master/combined-test/combined-test.model';
import { MatTable } from '@angular/material';
import { LinkTestComponent } from '../link-test/link-test.component';

@Component({
  selector: 'app-patient-tests-information',
  templateUrl: './patient-tests-information.component.html',
  styleUrls: ['./patient-tests-information.component.scss']
})
export class PatientTestsInformationComponent implements OnInit {
  public combinedTestData          : CombinedTestModel[] = [];
  public combinedTests: CombinedTestModel[];
  public selectedCombinedTests: CombinedTestModel[];
  isBusy: boolean;
  @ViewChild(LinkTestComponent, {static: false}) private linkTestComponent: LinkTestComponent;

  constructor(
    private readonly _combinedTestService: CombinedTestService
  ) {}

  ngOnInit(): void {
    this.getAllCombinedTest();
  }

  public getAllCombinedTest(): void {
    this.isBusy = true;
    this._combinedTestService.getAllTests().subscribe((data: CombinedTestModel[]) => {
      console.log('combined test result', data);
      this.combinedTests = data;
      this.isBusy = false;
    });
  }

  public searchQuery(event: any): void {
    this.selectedCombinedTests = this._filter(event.target.value);
  }

  public selectedAutoComplete(element: CombinedTestModel): void {
    this.combinedTestData.push(element);
    console.log('combined test selected result', this.combinedTestData);
    this.linkTestComponent.refreshTable();
  }

  private _filter(value: string): CombinedTestModel[] {
    const filterValue = value.toLowerCase();
    return this.combinedTests.filter((option) => option.testName.toLowerCase().includes(filterValue));
  }
}
