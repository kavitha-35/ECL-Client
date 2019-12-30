import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { map } from 'rxjs/operators';

import { HomeCollectionState } from './home-collection.reducers';
import { AddHomeCollection, LoadHomeCollectionList } from './home-collection.actions';
import { selectAllHomeCollections, selectIsAddingData, selectIsLoadingData } from './home-collection.selectors';

@Injectable({ providedIn: 'root' })
export class HomeCollectionFacade {
  public isLoadingData$       = this._store.select(selectIsLoadingData);
  public isAddingData$        = this._store.select(selectIsAddingData);
  public homeCollections$     = this._store.select(selectAllHomeCollections)
                                           .pipe(map(data =>  {
                                             // @ts-ignore
                                             return Object.values(data).length === 0 ? null : Object.values(data)
                                           }));

  constructor(private readonly _store: Store<HomeCollectionState>) {}

  public async loadHomeCollections(organizationId: string): Promise<void> {
    await this._store.dispatch(new LoadHomeCollectionList(organizationId));
  }

  public async addHomeCollection(payload: string): Promise<void> {
    await this._store.dispatch(new AddHomeCollection(payload))
  }
}
