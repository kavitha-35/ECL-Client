import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog, PageEvent, MatDialogConfig } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { DISPLAY_MODE } from 'app/main/models/constants';
import { AddReportFormatComponent } from './_dialogues/add-report-format/add-report-format.component';
import { take } from 'rxjs/operators';
import { EditReportFormatComponent } from './_dialogues/edit-report-format/edit-report-format.component';
import { ReportFormatModel } from 'app/control-panel/models/report-format/report-format.model';

@Component({
  selector: 'app-report-format',
  templateUrl: './report-format.component.html',
  styleUrls: ['./report-format.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportFormatComponent implements OnInit {
  public reportFormat: ReportFormatModel[];
  public showListView: boolean;
  public pageEvent: PageEvent;
  public pageSizeOptions: number[];
  public isFetchingReportFormat: boolean;
  matDialogConfig: MatDialogConfig = {
    panelClass: 'mat-dialogue-no-padding',
    width: '1400px',
    autoFocus: false,
  };

  constructor(
    private readonly _matDialog: MatDialog,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router,
  ) {
    this.pageEvent = { pageIndex: 0, pageSize: 10 } as PageEvent;
    this.pageSizeOptions = [10, 25, 50, 100];
  }

  ngOnInit(): void {
    this.getAllReportFormat();
    this._activatedRoute.queryParams.subscribe((queryParams) => {
      this.showListView = queryParams['view'] === DISPLAY_MODE.LIST;
    });
  }

  public onAddReportFormatButtonClicked(): void {
    this._matDialog
      .open(AddReportFormatComponent, this.matDialogConfig)
      .afterClosed()
      .pipe(take(1))
      .subscribe(() => {
        this.getAllReportFormat();
      });
  }

  public onEditReportFormatClicked(): void {
    this._matDialog
      .open(EditReportFormatComponent, this.matDialogConfig)
      .afterClosed()
      .pipe(take(1));
  }

  public getAllReportFormat(): void {
    this.isFetchingReportFormat = true;
  }

  public onShowListViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.LIST } });
  }

  public onShowTableViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.TABLE } });
  }

  public onDeleteReportFormatClicked(outsourceId: string): void {}
}
