import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialogConfig, MatDialog, PageEvent } from '@angular/material';
import { take } from 'rxjs/operators';
import { AddIndividualTestComponent } from './_dialogues/add-individual-test/add-individual-test.component';
import { EditIndividualTestComponent } from './_dialogues/edit-individual-test/edit-individual-test.component';
import { IndividualTestModel } from 'app/control-panel/models/test-master/individual-test/individual-test.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DISPLAY_MODE } from 'app/main/models/constants';
import { IndividualTestService } from 'app/control-panel/services/individual-test.service';
import { AddReferenceRangeComponent } from '../../refernce-range/_dialogues/add-reference-range/add-reference-range.component';

@Component({
  selector: 'app-individual-test',
  templateUrl: './individual-test.component.html',
  styleUrls: ['./individual-test.component.scss'],
})
export class IndividualTestComponent implements OnInit {
  public tests: IndividualTestModel[];
  public showListView: boolean;
  public pageEvent: PageEvent;
  public pageSizeOptions: number[];
  public lastSavedTest: IndividualTestModel;
  public isFetchingTests: boolean;

  matDialogConfig: MatDialogConfig = {
    panelClass: 'mat-dialogue-no-padding',
    width: '1400px',
    autoFocus: false,
  };

  constructor(
    private readonly matDialog: MatDialog,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router,
    private readonly _indiviualTestService: IndividualTestService,
    private readonly changeRef: ChangeDetectorRef,
  ) {
    this.pageEvent = { pageIndex: 0, pageSize: 10 } as PageEvent;
    this.pageSizeOptions = [10, 25, 50, 100];
  }

  ngOnInit(): void {
    this.getAllIndividualTests();
    this._activatedRoute.queryParams.subscribe((queryParams) => {
      this.showListView = queryParams['view'] === DISPLAY_MODE.LIST;
    });
  }

  public onAddIndividualTestButtonClicked(): void {
    this.matDialog
      .open(AddIndividualTestComponent, this.matDialogConfig)
      .afterClosed()
      .pipe(take(1))
      .subscribe(() => {
        this.getAllIndividualTests();
      });
  }

  public getAllIndividualTests(): void {
    this.isFetchingTests = true;
    this._indiviualTestService.getAllIndividualTest().subscribe((data) => {
      this.tests = data;
      this.isFetchingTests = false;
      this.changeRef.detectChanges();
    });
  }

  public onAddReferenceRangeClicked(testId: string): void {
    const matDialogConfig: MatDialogConfig = {
      panelClass: 'mat-dialogue-no-padding',
      width: '1400px',
      autoFocus: false,
      data: testId,
    };

    this.matDialog
      .open(AddReferenceRangeComponent, matDialogConfig)
      .afterClosed()
      .pipe(take(1))
      .subscribe(() => {
        this.getAllIndividualTests();
      });
  }
  public onEditIndividualTestClicked(individualTest: IndividualTestModel): void {
    const matDialogConfig: MatDialogConfig = {
      panelClass: 'mat-dialogue-no-padding',
      width: '1400px',
      autoFocus: false,
      data: individualTest,
    };
    this.matDialog
      .open(EditIndividualTestComponent, matDialogConfig)
      .afterClosed()
      .pipe(take(1))
      .subscribe(() => {
        this.getAllIndividualTests();
      });
  }

  public onShowListViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.LIST } });
  }

  public onShowTableViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.TABLE } });
  }

  public onDeleteIndividualTestClicked(testId: string): void {
    this._indiviualTestService.deleteIndividualTest(testId).subscribe(() => {
      this.getAllIndividualTests();
    });
  }

  public onManageReferenceRangeClicked( individualTestId: string): void {
    this._router.navigate(['/control-panel/individual-test-details'], { queryParams: { id: individualTestId } });
  }
}
