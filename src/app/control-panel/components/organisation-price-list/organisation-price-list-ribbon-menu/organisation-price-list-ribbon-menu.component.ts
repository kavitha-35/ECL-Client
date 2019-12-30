import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { OrganisationPriceListSearchComponent } from '../organisation-price-list-search/organisation-price-list-search.component';

@Component({
  selector: 'app-organisation-price-list-ribbon-menu',
  templateUrl: './organisation-price-list-ribbon-menu.component.html',
  styleUrls: ['./organisation-price-list-ribbon-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrganisationPriceListRibbonMenuComponent {
  @Output() public showListViewButtonClicked = new EventEmitter();
  @Output() public showTableViewButtonClicked = new EventEmitter();

  @ViewChild('filterPosition', { static: false }) filterPosition: ElementRef;

  constructor(private readonly _matDialog: MatDialog) {}

  onFilterButtonClicked(): void {
    const matDialogConfig: MatDialogConfig = {
      panelClass: 'mat-dialogue-no-padding',
      width: '1400px',
      autoFocus: false,
    };
    this._matDialog.open(OrganisationPriceListSearchComponent, matDialogConfig);
  }
  public onShowListViewButtonClicked(): void {
    this.showListViewButtonClicked.emit();
  }

  public onShowTableViewButtonClicked(): void {
    this.showTableViewButtonClicked.emit();
  }
}
