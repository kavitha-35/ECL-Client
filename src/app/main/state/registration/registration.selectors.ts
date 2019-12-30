import { createFeatureSelector, createSelector } from '@ngrx/store';

import { MainModuleState } from '../index';
import { adapter } from './registration.reducers';

export const mainModuleState = createFeatureSelector<MainModuleState>('main');

export const registrationState = createSelector(mainModuleState, (state) => state.registrations);

const { selectAll } = adapter.getSelectors(registrationState);

export const selectAllRegistrations = selectAll;
