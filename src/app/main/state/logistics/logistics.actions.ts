import { Action } from '@ngrx/store';

export enum LogisticsActionTypes {
  LoadLogisticsList = '[Logistics] Load Logistics List'
}

export class LoadLogisticsList implements Action {
  public readonly type = LogisticsActionTypes.LoadLogisticsList;
}

export type LogisticsActions = LoadLogisticsList;
