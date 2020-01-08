import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { DepartmentSearchComponent } from '../department-search/department-search.component';

@Component({
  selector: 'app-department-ribbon-menu',
  templateUrl: './department-ribbon-menu.component.html',
  styleUrls: ['./department-ribbon-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepartmentRibbonMenuComponent {
  @Output() public showListViewButtonClicked = new EventEmitter();
  @Output() public showTableViewButtonClicked = new EventEmitter();
  @Output() public exportToExcel = new EventEmitter();
  @Output() public exportToPdf = new EventEmitter();

  @ViewChild('filterPosition', { static: false }) filterPosition: ElementRef;

  constructor(private readonly _matDialog: MatDialog) {}

  onFilterButtonClicked(): void {
    const matDialogConfig: MatDialogConfig = {
      panelClass: 'mat-dialogue-no-padding',
      width: '1400px',
      autoFocus: false,
    };
    this._matDialog.open(DepartmentSearchComponent, matDialogConfig);
  }
  public onShowListViewButtonClicked(): void {
    this.showListViewButtonClicked.emit();
  }

  public onShowTableViewButtonClicked(): void {
    this.showTableViewButtonClicked.emit();
  }

  public onExportToExcelClicked(): void {
    this.exportToExcel.emit();
  }

  public onExportToPfdClicked(): void {
    this.exportToPdf.emit();
  }
}
