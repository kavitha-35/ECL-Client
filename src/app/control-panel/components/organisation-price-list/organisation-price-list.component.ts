import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { OrganisationPriceModel } from 'app/control-panel/models/organisation-price/organisation-price.model';
import { PageEvent, MatDialogConfig, MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { DISPLAY_MODE } from 'app/main/models/constants';
import { AddOrganisationPriceListComponent } from './_dialogues/add-organisation-price-list/add-organisation-price-list.component';
import { take } from 'rxjs/operators';
import { EditOrganisationPriceListComponent } from './_dialogues/edit-organisation-price-list/edit-organisation-price-list.component';

@Component({
  selector: 'app-organisation-price-list',
  templateUrl: './organisation-price-list.component.html',
  styleUrls: ['./organisation-price-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganisationPriceListComponent implements OnInit {
  public organisations: OrganisationPriceModel[];
  public showListView: boolean;
  public pageEvent: PageEvent;
  public pageSizeOptions: number[];
  public isFetchingOrganisations: boolean;

  matDialogConfig: MatDialogConfig = {
    panelClass: 'mat-dialogue-no-padding',
    width: '1400px',
    autoFocus: false,
  }
  constructor(
    private readonly matDialog: MatDialog,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router,
  ) {
    this.pageEvent = { pageIndex: 0, pageSize: 10 } as PageEvent;
    this.pageSizeOptions = [10, 25, 50, 100];
   }

  ngOnInit(): void {
    this._initializeValues();
    this._activatedRoute.queryParams.subscribe((queryParams) => {
      this.showListView = queryParams['view'] === DISPLAY_MODE.LIST;
  });

}
public onAddOrganisationPriceListButtonClicked(): void {
  this.matDialog
    .open(AddOrganisationPriceListComponent, this.matDialogConfig)
    .afterClosed()
    .pipe(take(1))
    .subscribe(() => {});
}

public onEditOrganisationPriceListClicked(): void {
  this.matDialog
    .open(EditOrganisationPriceListComponent, this.matDialogConfig)
    .afterClosed()
    .pipe(take(1))
    .subscribe(() => {});
}

public onShowListViewButtonClicked(): void {
  this._router.navigate([], { queryParams: { view: DISPLAY_MODE.LIST } });
}

public onShowTableViewButtonClicked(): void {
  this._router.navigate([], { queryParams: { view: DISPLAY_MODE.TABLE } });
}

public onDeleteTestClicked(testId: string): void {}


public _initializeValues(): void {
  this.organisations = [
    {
    clinicId: 'string',
    organisationName: 'string',
    testId: 'string',
    dosCode: 'string',
    mrp: 'string',
    net: 'string',
    cpt: 'string',
    }
  ];
}
}
