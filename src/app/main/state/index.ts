import { ActionReducerMap } from '@ngrx/store';

import * as fromUser from './users/users.reducers';
import * as fromTests from './tests/tests.reducers';
import * as fromLogistics from './logistics/logistics.reducers';
import * as fromAppointments from './appointments/appointment.reducers';
import * as fromRegistrations from './registration/registration.reducers';
import * as fromHomeCollection from './home-collection/home-collection.reducers';

export interface MainModuleState {
  tests             : fromTests.TestsState;
  logistics         : fromLogistics.LogisticsState;
  appointments      : fromAppointments.AppointmentState;
  registrations     : fromRegistrations.RegistrationState;
  homeCollection    : fromHomeCollection.HomeCollectionState;
  user              : fromUser.UserState;
}

export const reducers: ActionReducerMap<MainModuleState> = {
  tests             : fromTests.testsReducer,
  logistics         : fromLogistics.logisticsReducer,
  appointments      : fromAppointments.appointmentReducer,
  registrations     : fromRegistrations.registrationReducer,
  homeCollection    : fromHomeCollection.homeCollectionReducer,
  user              : fromUser.usersReducer
};

