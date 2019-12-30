import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

import { LoadAppointmentList } from './appointment.actions';
import { selectAllAppointments } from './appointment.selectors';
import { AppointmentModel } from '../../models/appointment/appointment.model';

@Injectable({ providedIn: 'root' })
export class AppointmentFacade {
  public appointments$ = this._store.select(selectAllAppointments).pipe(
    map((data) => {
      // @ts-ignore
      return Object.values(data).length === 0 ? null : Object.values(data);
    }),
  );

  constructor(private readonly _store: Store<AppointmentModel>) {}

  public async loadAppointments(): Promise<void> {
    await this._store.dispatch(new LoadAppointmentList());
  }
}
