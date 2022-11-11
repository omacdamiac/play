export interface IUser {
  id: number;
  name: string;
  lastName: string;
  rol: number;
  avatar?: string | undefined;
  user: string;
  pass: string;
  state: boolean;
}

export interface IProfileCMB {
  id: number;
  profile: string;
}

export interface ILIST_PROFILE {
  id: number;
  nombre: string;
}


  