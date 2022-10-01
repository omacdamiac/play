export class ICategory {
  id!: number;
  name!: string;
  options!: IOptions[];
}

export class IOptions {
  id!: string;
  name!: string;
  img!: string;
}
