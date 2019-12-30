import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { TestsEntity } from './tests.entity';
import { TestsActions, TestsActionTypes } from './tests.actions';

import { TestModel } from '../../models/tests/test.model';
import { LinkTestModel } from '../../models/tests/link-test.model';

export interface TestsState extends EntityState<TestModel> {
  searchResults   : LinkTestModel[]
}

export const adapter: EntityAdapter<TestModel> = createEntityAdapter<TestModel>();

export const initialState: TestsState = adapter.getInitialState({
  searchResults: []
});

export function testsReducer(state: TestsState = initialState, action: TestsActions): TestsState {
  switch (action.type) {
    case TestsActionTypes.LoadLinkTestSearchResults: {
      return { ...state, searchResults: TestsEntity.getSearchResults() };
    }

    default: {
      return state;
    }
  }
}
