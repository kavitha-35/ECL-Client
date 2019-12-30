import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

import { userResults } from './users.selector';
import { UserModel } from '../../models/user/user.model';
import { LoadUserResults } from './users.action';
import { UserState } from './users.reducers';

@Injectable({ providedIn: 'root' })
export class UsersFacade {
  public userResults$         = this._store.select(userResults);

  constructor(private readonly _store: Store<UserState>) {}

  public async loadUserResults(): Promise<void> {
    await this._store.dispatch(new LoadUserResults());
  }
}
