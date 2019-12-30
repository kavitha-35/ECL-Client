export interface UserModel {
  id: number;
  name: string;
  area: string;
  age: number;
  city: string;
  place: string;
  gender: string;
  role: UserRoleModel;
}

export interface UserRoleModel {
  id: number;
  name: string;
}
