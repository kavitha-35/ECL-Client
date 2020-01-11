export interface DepartmentModel {
  departmentId: string;
  departmentName: string;
  departmentType: DepartmentTypeModel;
}

interface DepartmentTypeModel {
  departmentTypeId: string;
  departmentTypeName: string;
}
