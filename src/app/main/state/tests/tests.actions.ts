import { Action } from '@ngrx/store';

export enum TestsActionTypes {
  LoadLinkTestSearchResults     = '[Tests] Load Link Test Search Results'
}

export class LoadLinkTestSearchResults implements Action {
  public readonly type = TestsActionTypes.LoadLinkTestSearchResults;
}

export type TestsActions = LoadLinkTestSearchResults;
