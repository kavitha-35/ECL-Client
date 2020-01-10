import { LookUpModel } from '../lookup/lookup.model';

export interface DepartmentModel {
  departmentId: string;
  departmentName: string;
  departmentType: LookUpModel[];
}
