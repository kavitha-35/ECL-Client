import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MainModuleState } from '../index';
import { adapter } from './logistics.reducers';

export const mainModuleState = createFeatureSelector<MainModuleState>('main');

export const logisticsState = createSelector(mainModuleState, (state) => state.logistics);

const { selectAll } = adapter.getSelectors(logisticsState);

export const selectAllLogistics = selectAll;
