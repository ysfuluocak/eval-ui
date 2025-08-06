export interface ILogin {
  email: "";
  password: "";
}

export interface ISignup extends ILogin {
  name: "";
  surname: "";
}

export interface IAuthResponse {
  token: string;
  user: IUser;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  accessToken:string;
}

export interface IUserProfile extends IUser {
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

export interface IUserUpdateProfile {
  name?: string;
  avatar?: string;
}
