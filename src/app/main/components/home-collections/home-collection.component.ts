import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { HomeCollectionModel } from '../../models/home-collections/home-collection.model';
import { HomeCollectionFacade } from '../../state/home-collection/home-collection.facade';
import { AddHomeCollectionComponent } from './_dialogues/add-home-collection/add-home-collection.component';
import { DISPLAY_MODE } from 'app/main/models/constants';
import { PageEvent } from '@angular/material';

@Component({
  templateUrl: './home-collection.component.html',
  styleUrls: ['./home-collection.component.scss'],
})
export class HomeCollectionComponent implements OnInit {
  public isAddingData$    : Observable<boolean>;
  public isLoadingData$   : Observable<boolean>;
  public homeCollections$ : Observable<HomeCollectionModel[]>;
  public showListView     : boolean;
  public pageEvent        : PageEvent;
  public pageSizeOptions  : number[] = [10, 25, 50, 100];

  constructor(
    private readonly _router: Router,
    private readonly _matDialog: MatDialog,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _homeCollectionFacade: HomeCollectionFacade,
  ) {
    this.pageEvent =  { pageIndex : 0, pageSize : 10 } as PageEvent;
  }

  ngOnInit(): void {
    this.isAddingData$ = this._homeCollectionFacade.isAddingData$;
    this.isLoadingData$ = this._homeCollectionFacade.isLoadingData$;
    this.homeCollections$ = this._homeCollectionFacade.homeCollections$;

    this._homeCollectionFacade.loadHomeCollections('1');
    this._activatedRoute.queryParams.subscribe(queryParams => {
      this.showListView = queryParams['view'] === DISPLAY_MODE.LIST;
    });
  }

  public onAddHomeCollectionClicked(): void {
    const matDialogConfig: MatDialogConfig = {
      panelClass: 'mat-dialogue-no-padding',
      width: '1400px',
    };

    this._matDialog
      .open(AddHomeCollectionComponent, matDialogConfig)
      .afterClosed()
      .pipe(take(1))
      .subscribe(console.log);
  }

  public async onRowSelected(selectedHomeCollectionId: string): Promise<void> {
    await this._router.navigate(['/main/home-collection-details'], { queryParams: { id: selectedHomeCollectionId } });
  }

  public onShowListViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.LIST } });
  }

  public onShowTableViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.TABLE } });
  }
}
