import { createFeatureSelector, createSelector } from '@ngrx/store';

import { MainModuleState } from '../index';
import { TestsState } from './tests.reducers';

export const mainModuleState = createFeatureSelector<MainModuleState>('main');

export const testsState = createSelector(mainModuleState, (state) => state.tests);

export const selectSearchResults = createSelector(testsState, (state: TestsState) => {
  return state.searchResults;
});
