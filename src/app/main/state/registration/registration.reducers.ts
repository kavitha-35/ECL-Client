import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { RegistrationEntity } from './registration.entity';
import { RegistrationModel } from '../../models/registration/registration.model';
import { RegistrationActions, RegistrationActionTypes } from './registration.actions';

export interface RegistrationState extends EntityState<RegistrationModel> {}

export const adapter: EntityAdapter<RegistrationModel> = createEntityAdapter<RegistrationModel>();

export const initialState: RegistrationState = adapter.getInitialState();

export function registrationReducer(state: RegistrationState = initialState, action: RegistrationActions): RegistrationState {
  switch (action.type) {
    case RegistrationActionTypes.LoadRegistrationList: {
      return adapter.addAll(RegistrationEntity.getRegistrationList(), state);
    }

    default: {
      return state;
    }
  }
}
