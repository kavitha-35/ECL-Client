import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, PageEvent, MatDialogConfig } from '@angular/material';
import { DISPLAY_MODE } from 'app/main/models/constants';
import { AddMethodComponent } from './_dialogues/add-method/add-method.component';
import { take } from 'rxjs/operators';
import { EditMethodComponent } from './_dialogues/edit-method/edit-method.component';
import { MethodModel } from 'app/control-panel/models/method/method.model';
import { MethodService } from 'app/control-panel/services/method.service';
import { LookUpModel } from 'app/control-panel/models/lookup/lookup.model';
import { LookupService } from 'app/control-panel/services/lookup.service';
import { ViewMethodComponent } from './_dialogues/view-method/view-method/view-method.component';

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MethodsComponent implements OnInit {
  public method: MethodModel[];
  public showListView: boolean;
  public pageEvent: PageEvent;
  public pageSizeOptions: number[];
  public isFetchingMethods: boolean;
  matDialogConfig: MatDialogConfig = {
    panelClass: 'mat-dialogue-no-padding',
    width: '1400px',
    autoFocus: false,
  };

  constructor(
    private readonly _matDialog: MatDialog,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router,
    private readonly _methodService: MethodService,
    private readonly cRef: ChangeDetectorRef,
  ) {
    this.pageEvent = { pageIndex: 0, pageSize: 10 } as PageEvent;
    this.pageSizeOptions = [10, 25, 50, 100];
  }

  ngOnInit(): void {
    this.getAllMethod();
    this._activatedRoute.queryParams.subscribe((queryParams) => {
      this.showListView = queryParams['view'] === DISPLAY_MODE.LIST;
    });
  }

  public onAddMethodButtonClicked(): void {
    this._matDialog
      .open(AddMethodComponent, this.matDialogConfig)
      .afterClosed()
      .pipe(take(1));
    this.getAllMethod();
  }

  public onEditMethodClicked(method: MethodModel): void {
    const matDialogConfig: MatDialogConfig = {
      panelClass: 'mat-dialogue-no-padding',
      width: '1400px',
      autoFocus: false,
      data: method,
    };
    this._matDialog
      .open(EditMethodComponent, matDialogConfig)
      .afterClosed()
      .pipe(take(1))
      .subscribe(() => {
        this.getAllMethod();
      });
  }

  public onShowListViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.LIST } });
  }

  public onShowTableViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.TABLE } });
  }

  public getAllMethod(): void {
    this.isFetchingMethods = true;
    this._methodService.getAllMethod().subscribe((data: MethodModel[]) => {
      this.method = data;
      console.log(data);
      this.isFetchingMethods = false;
      this.cRef.detectChanges();
    });
  }
  public onViewMethodClicked(method: MethodModel): void {
    const matDialogConfig: MatDialogConfig = {
      panelClass: 'mat-dialogue-no-padding',
      width: '1400px',
      autoFocus: false,
      data: method,
    };
    this._matDialog
      .open(ViewMethodComponent, matDialogConfig)
      .afterClosed()
      .pipe(take(1))
      .subscribe(() => {
        this.getAllMethod();
      });
  }
}
