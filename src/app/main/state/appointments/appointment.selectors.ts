import { createFeatureSelector, createSelector } from '@ngrx/store';

import { MainModuleState } from '../index';
import { adapter } from './appointment.reducers';

export const mainModuleState = createFeatureSelector<MainModuleState>('main');

export const appointmentState = createSelector(mainModuleState, (state) => state.appointments);

const { selectAll } = adapter.getSelectors(appointmentState);

export const selectAllAppointments = selectAll;
