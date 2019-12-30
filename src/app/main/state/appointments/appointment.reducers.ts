import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { AppointmentModel } from '../../models/appointment/appointment.model';
import { AppointmentActions, AppointmentActionTypes } from './appointment.actions';
import { AppointmentEntity } from './appointment.entity';

export interface AppointmentState extends EntityState<AppointmentModel> {}

export const adapter: EntityAdapter<AppointmentModel> = createEntityAdapter<AppointmentModel>();

export const initialState: AppointmentState = adapter.getInitialState();

export function appointmentReducer(state: AppointmentState = initialState, action: AppointmentActions): AppointmentState {
  switch (action.type) {
    case AppointmentActionTypes.LoadAppointmentList: {
      return adapter.addAll(AppointmentEntity.getAppointmentList(), state);
    }

    default: {
      return state;
    }
  }
}
