import { Component, OnInit, ChangeDetectionStrategy, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ReferenceRangeSearchComponent } from '../reference-range-search-component/reference-range-search-component.component';

@Component({
  selector: 'app-reference-range-ribbon-menu',
  templateUrl: './reference-range-ribbon-menu.component.html',
  styleUrls: ['./reference-range-ribbon-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReferenceRangeRibbonMenuComponent  {
  @Output() public showListViewButtonClicked = new EventEmitter();
  @Output() public showTableViewButtonClicked = new EventEmitter();

  @ViewChild('filterPosition', { static: false }) filterPosition: ElementRef;

  constructor(private readonly _matDialog: MatDialog) {}

  public onFilterButtonClicked(): void {
    const matDialogConfig: MatDialogConfig = {
      panelClass: 'mat-dialogue-no-padding',
      width: '1400px',
    };

    this._matDialog.open(ReferenceRangeSearchComponent, matDialogConfig);
  }

  public onShowListViewButtonClicked(): void {
    this.showListViewButtonClicked.emit();
  }

  public onShowTableViewButtonClicked(): void {
    this.showTableViewButtonClicked.emit();
  }
}
