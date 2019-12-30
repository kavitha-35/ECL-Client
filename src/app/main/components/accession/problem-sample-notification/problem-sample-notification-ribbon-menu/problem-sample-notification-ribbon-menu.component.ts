import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ProblemSampleNotificationSearchComponent } from '../problem-sample-notification-search/problem-sample-notification-search.component';

@Component({
  selector: 'app-problem-sample-notification-ribbon-menu',
  templateUrl: './problem-sample-notification-ribbon-menu.component.html',
  styleUrls: ['./problem-sample-notification-ribbon-menu.component.scss'],
})
export class ProblemSampleNotificationRibbonMenuComponent {
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

    this._matDialog.open(ProblemSampleNotificationSearchComponent, matDialogConfig);
  }

  public onShowListViewButtonClicked(): void {
    this.showListViewButtonClicked.emit();
  }

  public onShowTableViewButtonClicked(): void {
    this.showTableViewButtonClicked.emit();
  }
}
