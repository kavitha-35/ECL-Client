import { BadgeItem } from './badge-item';
import { ChildrenItems } from './children-items';

export interface Menu {
  state       : string;
  name        : string;
  paramValue ?: string;
  type        : string;
  icon        : string;
  badge      ?: BadgeItem[];
  children   ?: ChildrenItems[];
}
