import { createFeatureSelector, createSelector } from '@ngrx/store';

import { MainModuleState } from '../index';
import { adapter, HomeCollectionState } from './home-collection.reducers';

export const mainModuleState = createFeatureSelector<MainModuleState>('main');

export const homeCollectionState = createSelector(mainModuleState, (state) => state.homeCollection);

const { selectAll } = adapter.getSelectors(homeCollectionState);

export const selectAllHomeCollections = selectAll;

export const selectIsLoadingData = createSelector(homeCollectionState, (state: HomeCollectionState) => {
    return state.isLoadingData;
});

export const selectIsAddingData = createSelector(homeCollectionState, (state: HomeCollectionState) => {
    return state.isAddingData;
});
