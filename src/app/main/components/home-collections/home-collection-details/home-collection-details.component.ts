import { ActivatedRoute } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { take } from 'rxjs/operators';
import { untilDestroyed } from 'ngx-take-until-destroy';

import { HomeCollectionModel } from '../../../models/home-collections/home-collection.model';
import { HomeCollectionFacade } from '../../../state/home-collection/home-collection.facade';

@Component({
  selector: 'app-home-collection-details',
  templateUrl: './home-collection-details.component.html',
  styleUrls: ['./home-collection-details.component.scss'],
})
export class HomeCollectionDetailsComponent implements OnInit, OnDestroy {
  public selectedHomeCollection     : HomeCollectionModel;

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _homeCollectionFacade: HomeCollectionFacade,
  ) {}

  ngOnInit(): void {
    this._activatedRoute.queryParams.pipe(untilDestroyed(this)).subscribe((queryParams) => {
      const selectedId = queryParams['id'];
      if (selectedId) {
        this._homeCollectionFacade.homeCollections$.pipe(take(1)).subscribe((data) => {
          this.selectedHomeCollection = data.find((x) => x.id === selectedId);
        });
      }
    });
  }

  ngOnDestroy(): void {}
}
