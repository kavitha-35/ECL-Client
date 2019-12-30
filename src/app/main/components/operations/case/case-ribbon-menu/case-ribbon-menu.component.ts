import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { CaseSearchComponent } from '../case-search/case-search.component';

@Component({
  selector: 'app-case-ribbon-menu',
  templateUrl: './case-ribbon-menu.component.html',
  styleUrls: ['./case-ribbon-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaseRibbonMenuComponent {
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

    this._matDialog.open(CaseSearchComponent, matDialogConfig);
  }

  public onShowListViewButtonClicked(): void {
    this.showListViewButtonClicked.emit();
  }

  public onShowTableViewButtonClicked(): void {
    this.showTableViewButtonClicked.emit();
  }
}
