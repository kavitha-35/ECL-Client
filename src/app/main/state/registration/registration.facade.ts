import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

import { LoadRegistrationList } from './registration.actions';
import { selectAllRegistrations } from './registration.selectors';
import { RegistrationModel } from '../../models/registration/registration.model';

@Injectable({ providedIn: 'root' })
export class RegistrationFacade {
  public registrations$ = this._store.select(selectAllRegistrations).pipe(
                                      map((data) => {
                                        // @ts-ignore
                                        return Object.values(data).length === 0 ? null : Object.values(data);
                                      }),
                                    );

  constructor(private readonly _store: Store<RegistrationModel>) {}

  public async loadRegistrations(): Promise<void> {
    await this._store.dispatch(new LoadRegistrationList());
  }
}
