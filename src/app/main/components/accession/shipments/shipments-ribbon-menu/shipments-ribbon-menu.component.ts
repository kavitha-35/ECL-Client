import { Component, OnInit, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ShipmentsSearchComponent } from '../shipments-search/shipments-search.component';

@Component({
  selector: 'app-shipments-ribbon-menu',
  templateUrl: './shipments-ribbon-menu.component.html',
  styleUrls: ['./shipments-ribbon-menu.component.scss'],
})
export class ShipmentsRibbonMenuComponent {
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

    this._matDialog.open(ShipmentsSearchComponent, matDialogConfig);
  }

  public onShowListViewButtonClicked(): void {
    this.showListViewButtonClicked.emit();
  }

  public onShowTableViewButtonClicked(): void {
    this.showTableViewButtonClicked.emit();
  }
}
