import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialogConfig, MatDialog, PageEvent } from '@angular/material';
import { AddReferalLabComponent } from './_dialogues/add-referal-lab/add-referal-lab.component';
import { take } from 'rxjs/operators';
import { EditReferalLabComponent } from './_dialogues/edit-referal-lab/edit-referal-lab.component';
import { ActivatedRoute, Router } from '@angular/router';
import { DISPLAY_MODE } from 'app/main/models/constants';
import { OutsourcingManagementModel } from 'app/control-panel/models/outsourcing-management/outsourcing-management.model';
import { OutsourceManagementService } from 'app/control-panel/services/outsource-management.service';

@Component({
  selector: 'app-outsourcing-management',
  templateUrl: './outsourcing-management.component.html',
  styleUrls: ['./outsourcing-management.component.scss'],
})
export class OutsourcingManagementComponent implements OnInit {
  public outsourcedLab: OutsourcingManagementModel[];
  public showListView: boolean;
  public pageEvent: PageEvent;
  public pageSizeOptions: number[];
  public isFetchingReferalLab: boolean;
  matDialogConfig: MatDialogConfig = {
    panelClass: 'mat-dialogue-no-padding',
    width: '1400px',
    autoFocus: false,
  };

  constructor(
    private readonly _matDialog: MatDialog,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router,
    private readonly _outsourcingManagementService: OutsourceManagementService,
    private readonly changeRef: ChangeDetectorRef,
  ) {
    this.pageEvent = { pageIndex: 0, pageSize: 10 } as PageEvent;
    this.pageSizeOptions = [10, 25, 50, 100];
  }

  ngOnInit(): void {
    this.getAllOutsoure();
    this._activatedRoute.queryParams.subscribe((queryParams) => {
      this.showListView = queryParams['view'] === DISPLAY_MODE.LIST;
    });
  }

  public onAddReferalLabButtonClicked(): void {
    this._matDialog
      .open(AddReferalLabComponent, this.matDialogConfig)
      .afterClosed()
      .pipe(take(1))
      .subscribe(() => {
        this.getAllOutsoure();
      });
  }

  public onEditReferalLabClicked(): void {
    this._matDialog
      .open(EditReferalLabComponent, this.matDialogConfig)
      .afterClosed()
      .pipe(take(1));
  }

  public getAllOutsoure(): void {
    this.isFetchingReferalLab = true;
    this._outsourcingManagementService.getAllOutsourcing().subscribe((data) => {
      this.outsourcedLab = data;
      console.log(data);
      this.isFetchingReferalLab = false;
      this.changeRef.detectChanges();
    });
  }

  public onShowListViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.LIST } });
  }

  public onShowTableViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.TABLE } });
  }

  public onDeleteReferalLabClicked(outsourceId: string): void {
    this._outsourcingManagementService.deleteOutsourcing(outsourceId).subscribe(() => {
      this.getAllOutsoure();
    });
  }
}
