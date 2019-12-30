import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

import { selectSearchResults } from './tests.selectors';
import { TestModel } from '../../models/tests/test.model';
import { LoadLinkTestSearchResults } from './tests.actions';

@Injectable({ providedIn: 'root' })
export class TestsFacade {
  public searchResults$         = this._store.select(selectSearchResults);

  constructor(private readonly _store: Store<TestModel>) {}

  public async loadLinkSearchResults(): Promise<void> {
    await this._store.dispatch(new LoadLinkTestSearchResults());
  }
}
