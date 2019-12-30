import { Action } from '@ngrx/store';

export enum HomeCollectionActionTypes {
  LoadHomeCollectionList          = '[Home Collection] Load Home Collection List',
  HomeCollectionListLoaded        = '[Home Collection] Home Collection List Loaded',
  AddHomeCollection               = '[Home Collection] Add Home Collection',
  HomeCollectionAdded             = '[Home Collection] Home Collection Added',
}

export class LoadHomeCollectionList implements Action {
  public readonly type = HomeCollectionActionTypes.LoadHomeCollectionList;

  constructor(public readonly payload: string) {}
}

export class HomeCollectionListLoaded implements Action {
  public readonly type = HomeCollectionActionTypes.HomeCollectionListLoaded;

  constructor(public readonly payload: any) {}
}

export class AddHomeCollection implements Action {
  public readonly type = HomeCollectionActionTypes.AddHomeCollection;

  constructor(public readonly payload: any) {}
}

export class HomeCollectionAdded implements Action {
  public readonly type = HomeCollectionActionTypes.HomeCollectionAdded;

  constructor(public readonly payload: any) {}
}

export type HomeCollectionActions = LoadHomeCollectionList |
                                    HomeCollectionListLoaded |
                                    AddHomeCollection |
                                    HomeCollectionAdded
