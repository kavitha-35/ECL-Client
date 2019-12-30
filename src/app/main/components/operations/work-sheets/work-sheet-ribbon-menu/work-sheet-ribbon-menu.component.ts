import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { WorkSheetSearchComponent } from '../work-sheet-search/work-sheet-search.component';

@Component({
  selector: 'app-work-sheet-ribbon-menu',
  templateUrl: './work-sheet-ribbon-menu.component.html',
  styleUrls: ['./work-sheet-ribbon-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkSheetRibbonMenuComponent {
  @Output() public showListViewButtonClicked  : EventEmitter<void>;
  @Output() public showTableViewButtonClicked : EventEmitter<void>;

  @ViewChild('filterPosition', { static: false }) filterPosition: ElementRef;

  constructor(private readonly _matDialog: MatDialog) {
    this.showListViewButtonClicked = new EventEmitter();
    this.showTableViewButtonClicked = new EventEmitter();
  }

  public onFilterButtonClicked(): void {
    const matDialogConfig: MatDialogConfig = {
      panelClass: 'mat-dialogue-no-padding',
      width: '1400px',
    };

    this._matDialog.open(WorkSheetSearchComponent, matDialogConfig);
  }

  public onShowListViewButtonClicked(): void {
    this.showListViewButtonClicked.emit();
  }

  public onShowTableViewButtonClicked(): void {
    this.showTableViewButtonClicked.emit();
  }
}
