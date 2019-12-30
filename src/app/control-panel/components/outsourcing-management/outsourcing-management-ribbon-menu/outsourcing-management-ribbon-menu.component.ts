import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { OutsourcingManagementSearchComponent } from '../outsourcing-management-search/outsourcing-management-search.component';

@Component({
  selector: 'app-outsourcing-management-ribbon-menu',
  templateUrl: './outsourcing-management-ribbon-menu.component.html',
  styleUrls: ['./outsourcing-management-ribbon-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OutsourcingManagementRibbonMenuComponent {
  @Output() public showListViewButtonClicked = new EventEmitter();
  @Output() public showTableViewButtonClicked = new EventEmitter();

  @ViewChild('filterPosition', { static: false }) filterPosition: ElementRef;

  constructor(private readonly _matDialog: MatDialog) {}

  public onFilterButtonClicked(): void {
    const matDialogConfig: MatDialogConfig = {
      panelClass: 'mat-dialogue-no-padding',
      width: '1400px',
    };

    this._matDialog.open(OutsourcingManagementSearchComponent, matDialogConfig);
  }

  public onShowListViewButtonClicked(): void {
    this.showListViewButtonClicked.emit();
  }

  public onShowTableViewButtonClicked(): void {
    this.showTableViewButtonClicked.emit();
  }
}
