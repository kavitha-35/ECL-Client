import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DepartmentModel } from 'app/control-panel/models/department/department.model';
import { PageEvent, MatDialogConfig, MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { DISPLAY_MODE } from 'app/main/models/constants';
import { EditDepartmentComponent } from './_dialogues/edit-department/edit-department.component';
import { AddDepartmentComponent } from './_dialogues/add-department/add-department.component';
import { take } from 'rxjs/operators';
import { DepartmentService } from 'app/control-panel/services/department.service';
import { Observable, Subject } from 'rxjs';
import { ViewDepartmentsComponent } from './_dialogues/view-departments/view-departments.component';

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
  departmentSubject: Subject<any> = new Subject();

  matDialogConfig: MatDialogConfig = {
    panelClass: 'mat-dialogue-no-padding',
    width: '1400px',
    autoFocus: false,
  };
  constructor(
    private readonly matDialog: MatDialog,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router,
    private readonly _departmentService: DepartmentService,
    private readonly cRef: ChangeDetectorRef,
  ) {
    this.pageEvent = { pageIndex: 0, pageSize: 10 } as PageEvent;
    this.pageSizeOptions = [10, 25, 50, 100];
  }

  ngOnInit(): void {
    this.getAllDepartment();
    this._activatedRoute.queryParams.subscribe((queryParams) => {
      this.showListView = queryParams['view'] === DISPLAY_MODE.LIST;
    });
  }
  public onAddDepartmentButtonClicked(): void {
    this.matDialog
      .open(AddDepartmentComponent, this.matDialogConfig)
      .afterClosed()
      .pipe(take(1))
      .subscribe(() => {
        this.getAllDepartment();
      });
  }

  public onEditDepartmentClicked(department: DepartmentModel): void {
    const matDialogConfig: MatDialogConfig = {
      panelClass: 'mat-dialogue-no-padding',
      width: '1400px',
      autoFocus: false,
      data: department,
    };
    this.matDialog
      .open(EditDepartmentComponent, matDialogConfig)
      .afterClosed()
      .pipe(take(1))
      .subscribe(() => {
        this.getAllDepartment();
      });
  }

  public onExportToExcelButtonClicked(): void {
    this.departmentSubject.next('excel');
  }

  public onExportToPdfButtonClicked(): void {
    this.departmentSubject.next('pdf');
  }

  onExportToDocButtonClicked(): void {
    this.departmentSubject.next('doc');
  }

  public onShowListViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.LIST } });
  }

  public getAllDepartment(): void {
    this.isFetchingDepartments = true;
    this._departmentService.getAllDepartments().subscribe((data) => {
      this.departments = data;
      console.log(data);
      this.isFetchingDepartments = false;
      this.cRef.detectChanges();
    });
  }

  public onShowTableViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.TABLE } });
  }

  public onDeleteDepartmentClicked(departmentId: string): void {
    this._departmentService.deleteDepartment(departmentId).subscribe(() => {
      this.getAllDepartment();
    });
  }

  public onViewDepartmentClicked(department: DepartmentModel): void {
    const matDialogConfig: MatDialogConfig = {
      panelClass: 'mat-dialogue-no-padding',
      width: '1400px',
      autoFocus: false,
      data: department,
    };
    this.matDialog
      .open(ViewDepartmentsComponent, matDialogConfig)
      .afterClosed()
      .pipe(take(1))
      .subscribe(() => {
        this.getAllDepartment();
      });
  }
}
