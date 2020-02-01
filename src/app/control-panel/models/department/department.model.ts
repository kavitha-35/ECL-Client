export interface DepartmentModel {
  keyValue: any;
  departmentId: string;
  departmentName: string;
  departmentType: DepartmentTypeModel;
}

interface DepartmentTypeModel {
  departmentTypeId: string;
  departmentTypeName: string;
}
