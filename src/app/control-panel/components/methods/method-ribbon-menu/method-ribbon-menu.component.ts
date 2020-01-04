import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { OutsourcingManagementSearchComponent } from '../../outsourcing-management/outsourcing-management-search/outsourcing-management-search.component';
import { MethodSearchComponent } from '../method-search/method-search.component';

@Component({
  selector: 'app-method-ribbon-menu',
  templateUrl: './method-ribbon-menu.component.html',
  styleUrls: ['./method-ribbon-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MethodRibbonMenuComponent {
  @Output() public showListViewButtonClicked = new EventEmitter();
  @Output() public showTableViewButtonClicked = new EventEmitter();

  @ViewChild('filterPosition', { static: false }) filterPosition: ElementRef;

  constructor(private readonly _matDialog: MatDialog) {}

  public onFilterButtonClicked(): void {
    const matDialogConfig: MatDialogConfig = {
      panelClass: 'mat-dialogue-no-padding',
      width: '1400px',
    };

    this._matDialog.open(MethodSearchComponent, matDialogConfig);
  }

  public onShowListViewButtonClicked(): void {
    this.showListViewButtonClicked.emit();
  }

  public onShowTableViewButtonClicked(): void {
    this.showTableViewButtonClicked.emit();
  }

}
