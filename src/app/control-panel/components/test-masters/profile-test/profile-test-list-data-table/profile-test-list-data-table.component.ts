import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { take } from 'rxjs/operators';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { LinkTestToProfiletestComponent } from '../_dialogues/link-test-to-profiletest/link-test-to-profiletest.component';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ProfileTestModel } from 'app/control-panel/models/test-master/profile-test/profile-test.model';
import { TestModel } from 'app/control-panel/models/tests/test.model';

@Component({
  selector: 'app-profile-test-list-data-table',
  templateUrl: './profile-test-list-data-table.component.html',
  styleUrls: ['./profile-test-list-data-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProfileTestListDataTableComponent implements OnInit {
  @Output() editProfileTestClicked = new EventEmitter<ProfileTestModel>();
  @Input() isBusy: boolean;
  public expandedElement: ProfileTestModel[];
  public linkedTests: TestModel[];
  public profileTest: ProfileTestModel[] = [
    {
      name: '11-DeSoXYCORTICOSTTERONE',
      id: '1',
      outsourceId: 123,
      integrationCode: '123',
      minimumSellingPrice: 123,
      revenueCap: 123,
      profilePrice: 123,
      status: 'Not verified',
      tests: [
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
      ],
    },
    {
      name: '5-AMINOSALYLIC ACID',
      id: '1',
      outsourceId: 123,
      integrationCode: '123',
      minimumSellingPrice: 123,
      revenueCap: 123,
      profilePrice: 123,
      status: 'Not verified',
      tests: [
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
      ],
    },
  ];
  displayedColumns: string[] = ['nestedSymbol', 'name', 'integration', 'price', 'status', 'action'];
  constructor(private readonly matDialog: MatDialog) {}

  ngOnInit(): void {}

  public onEditProfileTestClicked(profiletest: ProfileTestModel): void {
    this.editProfileTestClicked.emit(profiletest);
  }

  public onAddLinkTestButtonClicked(): void {
    const matDialogConfig: MatDialogConfig = {
      disableClose: true,
      width: '1400px',
      height: '440px',
      panelClass: 'mat-dialogue-no-padding',
    };

    this.matDialog
      .open(LinkTestToProfiletestComponent, matDialogConfig)
      .afterClosed()
      .pipe(take(1))
      .subscribe((linkedTests) => (this.linkedTests = linkedTests));
  }
}
