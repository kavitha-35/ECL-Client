import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { HomeCollectionEntity } from './home-collection.entity';
import { HomeCollectionModel } from '../../models/home-collections/home-collection.model';
import { HomeCollectionActions, HomeCollectionActionTypes } from './home-collection.actions';

export interface HomeCollectionState extends EntityState<HomeCollectionModel> {
  isLoadingData   : boolean;
  isAddingData    : boolean;
}

export const adapter: EntityAdapter<HomeCollectionModel> = createEntityAdapter<HomeCollectionModel>();

export const initialState: HomeCollectionState = adapter.getInitialState(
  { isAddingData: false, isLoadingData: false }
);

export function homeCollectionReducer(state: HomeCollectionState = initialState, action: HomeCollectionActions): HomeCollectionState {
  switch (action.type) {
    case HomeCollectionActionTypes.LoadHomeCollectionList: {
      const homeCollectionList: HomeCollectionModel[] = HomeCollectionEntity.getHomeCollectionList();
      return adapter.addAll(homeCollectionList, state);
    }

    case HomeCollectionActionTypes.HomeCollectionListLoaded: {
      return state;
    }

    case HomeCollectionActionTypes.AddHomeCollection: {
      return state;
    }

    case HomeCollectionActionTypes.HomeCollectionAdded: {
      return state;
    }

    default: {
      return state;
    }
  }
}
