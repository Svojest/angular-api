export interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface IResources {
  id: string;
  color: string;
  name: string;
  pantone_value: string;
  year: number;
}

export interface IData {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}

export interface IDataUser extends IData {
  data: IUser[];
}
export interface IDataResource extends IData {
  data: IResources[];
}

export interface IAccount {
  email: string;
  password: string;
}
