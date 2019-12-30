import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { TestService } from 'app/main/services/test.service';
import { take } from 'rxjs/operators';
import { AddCombinedTestComponent } from './_dialogues/add-combined-test/add-combined-test.component';
import { EditCombinedTestComponent } from './_dialogues/edit-combined-test/edit-combined-test.component';
import { TestModel } from 'app/control-panel/models/tests/test.model';

@Component({
  selector: 'app-combined-test',
  templateUrl: './combined-test.component.html',
  styleUrls: ['./combined-test.component.scss'],
})
export class CombinedTestComponent implements OnInit {
  public tests: TestModel[];
  public lastSavedTest: TestModel;
  public isFetchingTests: boolean;
  matDialogConfig: MatDialogConfig = {
    disableClose: true,
    width: '1400px',
    panelClass: 'mat-dialogue-no-padding',
  };

  constructor(private readonly matDialog: MatDialog, private readonly testService: TestService) {}

  ngOnInit(): void {
    this.tests = [
      {
        id: 1,
        name: 'Malaria',
        testCode: '12345',
        shortText: 'xxxxx',
        categoryId: 12345,
        integrationCode: '6543',
        description: 'xxxxxx',
        isAutoDispatch: false,
        isBillOnlyTest: false,
        isReportMasked: false,
        isNABLTest: false,
        isNA: false,
        isPrintPriorityNA: false,
        isOutSourceTest: false,
        isDiscardDiscount: false,
        isCAP: false,
        isNoReportToPatient: false,
        price: 550,
        price2: 600,
        minimumSellingPrice: 450,
        cost: 500,
        revenueCAP: 100,
        targetTATDays: 10,
        targetTATHours: 10,
        targetTATMinutes: 10,
        sampleId: 10,
      },
      {
        id: 3,
        name: 'Dengu',
        testCode: '12345',
        shortText: 'xxxxx',
        categoryId: 12345,
        integrationCode: '6543',
        description: 'xxxxxx',
        isAutoDispatch: false,
        isBillOnlyTest: false,
        isReportMasked: false,
        isNABLTest: false,
        isNA: false,
        isPrintPriorityNA: false,
        isOutSourceTest: false,
        isDiscardDiscount: false,
        isCAP: false,
        isNoReportToPatient: false,
        price: 550,
        price2: 600,
        minimumSellingPrice: 450,
        cost: 500,
        revenueCAP: 100,
        targetTATDays: 10,
        targetTATHours: 10,
        targetTATMinutes: 10,
        sampleId: 10,
      },
      {
        id: 2,
        name: 'Sugar',
        testCode: '12345',
        shortText: 'xxxxx',
        categoryId: 12345,
        integrationCode: '6543',
        description: 'xxxxxx',
        isAutoDispatch: false,
        isBillOnlyTest: false,
        isReportMasked: false,
        isNABLTest: false,
        isNA: false,
        isPrintPriorityNA: false,
        isOutSourceTest: false,
        isDiscardDiscount: false,
        isCAP: false,
        isNoReportToPatient: false,
        price: 550,
        price2: 600,
        minimumSellingPrice: 450,
        cost: 500,
        revenueCAP: 100,
        targetTATDays: 10,
        targetTATHours: 10,
        targetTATMinutes: 10,
        sampleId: 10,
      },
    ];
  }

  public onAddTestButtonClicked(): void {
    this.matDialog
      .open(AddCombinedTestComponent, this.matDialogConfig)
      .afterClosed()
      .pipe(take(1))
      .subscribe((testToBeAdded: TestModel) => {});
  }

  public loadTests(): void {
    this.isFetchingTests = true;
    this.testService.getTestsByDepartmentId('1').subscribe((data) => {
      this.tests = data;
      this.isFetchingTests = false;
    });
  }

  public onEditTestClicked(test: TestModel): void {
    this.matDialogConfig.data = test;
    this.matDialog
      .open(EditCombinedTestComponent, this.matDialogConfig)
      .afterClosed()
      .pipe(take(1))
      .subscribe((testToBeEdited: TestModel) => {});
  }

  public onDeleteTestClicked(testId: string): void {}
}
