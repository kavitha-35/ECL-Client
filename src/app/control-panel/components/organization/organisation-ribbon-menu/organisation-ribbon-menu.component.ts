import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { OrganisationsSearchComponent } from '../organisations-search/organisations-search.component';

@Component({
  selector: 'app-organisation-ribbon-menu',
  templateUrl: './organisation-ribbon-menu.component.html',
  styleUrls: ['./organisation-ribbon-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganisationRibbonMenuComponent {
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

    this._matDialog.open(OrganisationsSearchComponent, matDialogConfig);
  }

  public onShowListViewButtonClicked(): void {
    this.showListViewButtonClicked.emit();
  }

  public onShowTableViewButtonClicked(): void {
    this.showTableViewButtonClicked.emit();
  }
}
