export interface IUser {
  id: number;
  name: string;
  lastName: string;
  rol: string;
  avatar?: string | undefined;
  user: string;
  pass: string;
  state: boolean;
}

export interface IProfileCMB {
  id: number;
  profile: string;
}


  