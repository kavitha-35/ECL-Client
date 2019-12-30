import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

import { LoadLogisticsList } from './logistics.actions';
import { selectAllLogistics } from './logistics.selectors';
import { LogisticModel } from '../../models/logistics/logistic.model';

@Injectable({ providedIn: 'root' })
export class LogisticsFacade {
  public logistics$ = this._store.select(selectAllLogistics).pipe(
    map((data) => {
      // @ts-ignore
      return Object.values(data).length === 0 ? null : Object.values(data);
    }),
  );

  constructor(private readonly _store: Store<LogisticModel>) {}

  public async loadLogistics(): Promise<void> {
    await this._store.dispatch(new LoadLogisticsList());
  }
}
