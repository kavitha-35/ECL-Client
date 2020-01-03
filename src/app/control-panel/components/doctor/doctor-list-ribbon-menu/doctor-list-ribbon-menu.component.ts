import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DoctorListSearchComponent } from '../doctor-list-search/doctor-list-search.component';

@Component({
  selector: 'app-doctor-list-ribbon-menu',
  templateUrl: './doctor-list-ribbon-menu.component.html',
  styleUrls: ['./doctor-list-ribbon-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DoctorListRibbonMenuComponent  {
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

    this._matDialog.open(DoctorListSearchComponent, matDialogConfig);
  }

  public onShowListViewButtonClicked(): void {
    this.showListViewButtonClicked.emit();
  }

  public onShowTableViewButtonClicked(): void {
    this.showTableViewButtonClicked.emit();
  }
}
