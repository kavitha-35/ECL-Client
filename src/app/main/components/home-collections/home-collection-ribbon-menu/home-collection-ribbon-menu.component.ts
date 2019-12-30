import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { HomeCollectionSearchComponent } from '../_dialogues/home-collection-search/home-collection-search.component';

@Component({
  selector: 'app-home-collection-ribbon-menu',
  templateUrl: './home-collection-ribbon-menu.component.html',
  styleUrls: ['./home-collection-ribbon-menu.component.scss'],
})
export class HomeCollectionRibbonMenuComponent {
  @Output() public showListViewButtonClicked = new EventEmitter();
  @Output() public showTableViewButtonClicked = new EventEmitter();

  @ViewChild('filterPosition', { static: false }) filterPosition: ElementRef;

  constructor(private readonly _matDialog: MatDialog) {}

  public onFilterButtonClicked(): void {
    const matDialogConfig: MatDialogConfig = {
      panelClass: 'mat-dialogue-no-padding',
      width: '1400px',
    };

    this._matDialog.open(HomeCollectionSearchComponent, matDialogConfig);
  }


  public onShowListViewButtonClicked(): void {
    this.showListViewButtonClicked.emit();
  }

  public onShowTableViewButtonClicked(): void {
    this.showTableViewButtonClicked.emit();
  }
}
