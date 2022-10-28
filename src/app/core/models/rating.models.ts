export interface IRating {
  id: number;
  category: string;
  user: string;
  answer: {
    item: IAnswer;
    item2: IAnswer;
    item3: IAnswer;
    item4: IAnswer;
    item5: IAnswer;
  };
}

export interface IAnswer {
  id: number;
  name: string;
  img: string;
  answer: boolean | null;
}
