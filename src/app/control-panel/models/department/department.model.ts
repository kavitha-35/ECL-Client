export interface DepartmentModel {
  keyValue: any;
  departmentId: string;
  departmentName: string;
  departmentType: DepartmentTypeModel;
  active: boolean;
  activeStatus: string;
}

interface DepartmentTypeModel {
  departmentTypeId: string;
  departmentTypeName: string;
}
