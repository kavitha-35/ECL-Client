import { Component, OnInit, EventEmitter, ElementRef, ViewChild, Output } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { TemperatureControlSearchComponent } from '../temperature-control-search/temperature-control-search.component';

@Component({
  selector: 'app-temperature-control-ribbon-menu',
  templateUrl: './temperature-control-ribbon-menu.component.html',
  styleUrls: ['./temperature-control-ribbon-menu.component.scss'],
})
export class TemperatureControlRibbonMenuComponent {
  @Output() public showListViewButtonClicked = new EventEmitter();
  @Output() public showTableViewButtonClicked = new EventEmitter();

  @ViewChild('filterPosition', { static: false }) filterPosition: ElementRef;

  constructor(private readonly _matDialog: MatDialog) {}

  public onFilterButtonClicked(): void {
    const matDialogConfig: MatDialogConfig = {
      panelClass: 'mat-dialogue-no-padding',
      width: '1400px',
    };

    this._matDialog.open(TemperatureControlSearchComponent, matDialogConfig);
  }

  public onShowListViewButtonClicked(): void {
    this.showListViewButtonClicked.emit();
  }

  public onShowTableViewButtonClicked(): void {
    this.showTableViewButtonClicked.emit();
  }
}
