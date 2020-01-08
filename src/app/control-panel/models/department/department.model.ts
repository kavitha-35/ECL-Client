export interface DepartmentModel {
  departmentId: string;
  departmentName: string;
  departmentType: string;
  doctor: DoctorModel;
}

interface DoctorModel {
  doctorId: string;
  doctorName: string;
}
