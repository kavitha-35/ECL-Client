import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ResultsAuthorizationDataSearchComponent } from '../results-authorization-data-search/results-authorization-data-search.component';

@Component({
  selector: 'app-results-authorization-ribbon-menu',
  templateUrl: './results-authorization-ribbon-menu.component.html',
  styleUrls: ['./results-authorization-ribbon-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultsAuthorizationRibbonMenuComponent {
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

    this._matDialog.open(ResultsAuthorizationDataSearchComponent , matDialogConfig);
  }

  public onShowListViewButtonClicked(): void {
    this.showListViewButtonClicked.emit();
  }

  public onShowTableViewButtonClicked(): void {
    this.showTableViewButtonClicked.emit();
  }
}
