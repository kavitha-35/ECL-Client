import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ReportFormatSearchComponent } from '../report-format-search/report-format-search.component';

@Component({
  selector: 'app-report-format-ribbon-menu',
  templateUrl: './report-format-ribbon-menu.component.html',
  styleUrls: ['./report-format-ribbon-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportFormatRibbonMenuComponent {
  @Output() public showListViewButtonClicked = new EventEmitter();
  @Output() public showTableViewButtonClicked = new EventEmitter();

  @ViewChild('filterPosition', { static: false }) filterPosition: ElementRef;

  constructor(private readonly _matDialog: MatDialog) {}

  public onFilterButtonClicked(): void {
    const matDialogConfig: MatDialogConfig = {
      panelClass: 'mat-dialogue-no-padding',
      width: '1400px',
    };

    this._matDialog.open(ReportFormatSearchComponent, matDialogConfig);
  }

  public onShowListViewButtonClicked(): void {
    this.showListViewButtonClicked.emit();
  }

  public onShowTableViewButtonClicked(): void {
    this.showTableViewButtonClicked.emit();
  }
}
