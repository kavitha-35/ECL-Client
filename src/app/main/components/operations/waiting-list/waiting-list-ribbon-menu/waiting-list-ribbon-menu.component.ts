import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { WaitingListDataSearchComponent } from '../waiting-list-data-search/waiting-list-data-search.component';

@Component({
  selector: 'app-waiting-list-ribbon-menu',
  templateUrl: './waiting-list-ribbon-menu.component.html',
  styleUrls: ['./waiting-list-ribbon-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WaitingListRibbonMenuComponent {
  @Output() public showListViewButtonClicked : EventEmitter<void>;
  @Output() public showTableViewButtonClicked: EventEmitter<void>;

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

    this._matDialog.open(WaitingListDataSearchComponent, matDialogConfig);
  }

  public onShowListViewButtonClicked(): void {
    this.showListViewButtonClicked.emit();
  }

  public onShowTableViewButtonClicked(): void {
    this.showTableViewButtonClicked.emit();
  }
}
