import { Action } from '@ngrx/store';

export enum RegistrationActionTypes {
  LoadRegistrationList        = '[Registration] Load Registration List'
}

export class LoadRegistrationList implements Action {
  public readonly type = RegistrationActionTypes.LoadRegistrationList;
}

export type RegistrationActions = LoadRegistrationList;
