import { Component, OnInit, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { PendingAccessionSearchComponent } from '../pending-accession-search/pending-accession-search.component';

@Component({
  selector: 'app-pending-accession-ribbon-menu',
  templateUrl: './pending-accession-ribbon-menu.component.html',
  styleUrls: ['./pending-accession-ribbon-menu.component.scss'],
})
export class PendingAccessionRibbonMenuComponent {
  @Output() public showListViewButtonClicked = new EventEmitter();
  @Output() public showTableViewButtonClicked = new EventEmitter();

  @ViewChild('filterPosition', { static: false }) filterPosition: ElementRef;

  constructor(private readonly _matDialog: MatDialog) {}

  public onFilterButtonClicked(): void {
    const matDialogConfig: MatDialogConfig = {
      panelClass: 'mat-dialogue-no-padding',
      width: '1400px',
    };

    this._matDialog.open(PendingAccessionSearchComponent, matDialogConfig);
  }

  public onShowListViewButtonClicked(): void {
    this.showListViewButtonClicked.emit();
  }

  public onShowTableViewButtonClicked(): void {
    this.showTableViewButtonClicked.emit();
  }
}
