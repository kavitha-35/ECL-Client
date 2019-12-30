import { Action } from '@ngrx/store';

export enum UsersActionTypes {
  LoadUsers     = '[Users] Load User Results'
}

export class LoadUserResults implements Action {
  public readonly type = UsersActionTypes.LoadUsers;
}

export type UserActions = LoadUserResults;
