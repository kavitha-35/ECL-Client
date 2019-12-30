import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { UsersEntity } from './users.entity';
import { UserActions, UsersActionTypes } from './users.action';

import { UserModel } from '../../models/user/user.model';


export interface UserState extends EntityState<UserModel> {
  userResult   : UserModel[]
}

export const adapter: EntityAdapter<UserModel> = createEntityAdapter<UserModel>();

export const initialState: UserState = adapter.getInitialState({
  userResult: []
});

export function usersReducer(state: UserState = initialState, action: UserActions): UserState {
  switch (action.type) {
    case UsersActionTypes.LoadUsers: {
      return { ...state, userResult: UsersEntity.getResults() };
    }

    default: {
      return state;
    }
  }
}
