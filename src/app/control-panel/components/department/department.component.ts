import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DepartmentModel } from 'app/control-panel/models/department/department.model';
import { PageEvent, MatDialogConfig, MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { DISPLAY_MODE } from 'app/main/models/constants';
import { EditDepartmentComponent } from './_dialogues/edit-department/edit-department.component';
import { AddDepartmentComponent } from './_dialogues/add-department/add-department.component';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepartmentComponent implements OnInit {
  public departments: DepartmentModel[];
  public showListView: boolean;
  public pageEvent: PageEvent;
  public pageSizeOptions: number[];
  public isFetchingDepartments: boolean;

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
  public onAddDepartmentButtonClicked(): void {
    this.matDialog
      .open(AddDepartmentComponent, this.matDialogConfig)
      .afterClosed()
      .pipe(take(1))
      .subscribe(() => {});
  }

  public onEditDepartmentClicked(): void {
    this.matDialog
      .open(EditDepartmentComponent, this.matDialogConfig)
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
    this.departments = [
      {
        departmentName: 'string',
        departmentType: 'string',
        doctorName: 'string',
      },
    ];
  }
}
