import { Component, ChangeDetectionStrategy, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { IndividualTestSearchComponent } from '../individual-test-search/individual-test-search.component';

@Component({
  selector: 'app-individual-test-ribbon-menu',
  templateUrl: './individual-test-ribbon-menu.component.html',
  styleUrls: ['./individual-test-ribbon-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndividualTestRibbonMenuComponent {
  @Output() public showListViewButtonClicked = new EventEmitter();
  @Output() public showTableViewButtonClicked = new EventEmitter();

  @ViewChild('filterPosition', { static: false }) filterPosition: ElementRef;
  constructor(private readonly _matDialog: MatDialog) {}

  public onFilterButtonClicked(): void {
    const matDialogConfig: MatDialogConfig = {
      panelClass: 'mat-dialogue-no-padding',
      width: '1400px',
      autoFocus: false
    };

    this._matDialog.open(IndividualTestSearchComponent, matDialogConfig);
  }

  public onShowListViewButtonClicked(): void {
    this.showListViewButtonClicked.emit();
  }

  public onShowTableViewButtonClicked(): void {
    this.showTableViewButtonClicked.emit();
  }
}
