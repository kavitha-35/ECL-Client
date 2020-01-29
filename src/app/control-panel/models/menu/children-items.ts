import { ChildrenItems1 } from './child-items1';

export interface ChildrenItems {
  state: string;
  name: string;
  paramValue?: string;
  type?: string;
  children1?: ChildrenItems1[];
}
