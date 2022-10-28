export namespace InputNsModel {
  export interface InputInt {
    text: string;
    place: string;
    required: boolean;
    name: string;
  }
  /**
        @param text: string
        @param place: string
        @param required: boolean
        @param name: string
     */

  export class InputClass {
    text: string;
    place: string;
    required: boolean;
    name: string;

    constructor(
      textp: string,
      placep: string,
      required: boolean,
      namep: string
    ) {
      this.text = textp;
      this.place = placep;
      this.required = required;
      this.name = namep;
    }
  }
}
