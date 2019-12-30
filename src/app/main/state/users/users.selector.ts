import { createFeatureSelector, createSelector } from '@ngrx/store';

import { MainModuleState } from '../index';
import { UserState } from './users.reducers';

export const mainModuleState = createFeatureSelector<MainModuleState>('main');

export const userState = createSelector(mainModuleState, (state) => state.user);

export const userResults = createSelector(userState, (state: UserState) => {
  return state.userResult;
});
