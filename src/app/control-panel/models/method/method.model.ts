import { DepartmentModel } from '../department/department.model';

export interface MethodModel {
  methodId: string;
  methodName: string;
  department: DepartmentModel;
}
