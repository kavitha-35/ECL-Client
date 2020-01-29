import { ChildrenItems2 } from './child-items2';

export interface ChildrenItems1 {
  state: string;
  name: string;
  paramValue?: string;
  type?: string;
  children1?: ChildrenItems2[];
}
