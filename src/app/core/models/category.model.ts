export class ICategory {
  id!: number;
  name!: string;
  state!: boolean;
  options!: IOptions[];
}

export class IOptions {
  id!: number;
  name!: string;
  img!: string;
}