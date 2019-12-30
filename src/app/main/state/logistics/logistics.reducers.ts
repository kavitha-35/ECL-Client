import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { LogisticsEntity } from './logistics.entity';
import { LogisticModel } from '../../models/logistics/logistic.model';
import { LogisticsActions, LogisticsActionTypes } from './logistics.actions';

export interface LogisticsState extends EntityState<LogisticModel> {}

export const adapter: EntityAdapter<LogisticModel> = createEntityAdapter<LogisticModel>();

export const initialState: LogisticsState = adapter.getInitialState();

export function logisticsReducer(state: LogisticsState = initialState, action: LogisticsActions): LogisticsState {
  switch (action.type) {
    case LogisticsActionTypes.LoadLogisticsList: {
      return adapter.addAll(LogisticsEntity.getLogisticsList(), state);
    }

    default: {
      return state;
    }
  }
}
