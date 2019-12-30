import { MatDialogConfig, MatDialog } from '@angular/material';
import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

import { AppointmentSearchComponent } from '../appointment-search/appointment-search.component';

@Component({
  selector: 'app-appointment-ribbon-menu',
  templateUrl: './appointment-ribbon-menu.component.html',
  styleUrls: ['./appointment-ribbon-menu.component.scss'],
})
export class AppointmentRibbonMenuComponent {
  @Output() public showListViewButtonClicked = new EventEmitter();
  @Output() public showTableViewButtonClicked = new EventEmitter();

  @ViewChild('filterPosition', { static: false }) filterPosition: ElementRef;

  constructor(private readonly _matDialog: MatDialog) {}

  public onFilterButtonClicked(): void {
    const matDialogConfig: MatDialogConfig = {
      panelClass: 'mat-dialogue-no-padding',
      width: '1400px',
    };

    this._matDialog.open(AppointmentSearchComponent, matDialogConfig);
  }

  public onShowListViewButtonClicked(): void {
    this.showListViewButtonClicked.emit();
  }

  public onShowTableViewButtonClicked(): void {
    this.showTableViewButtonClicked.emit();
  }
}
