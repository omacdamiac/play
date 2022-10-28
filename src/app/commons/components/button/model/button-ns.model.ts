export namespace ButtonNsModel {
  export interface ButtonInt {
    texto: string;
    color: string;
    type?: string;
  }
  /**
      @param texto: string
      @param color: string
      @param type?: string
    */

  export class ButtonClass {
    texto: string;
    color: string;
    type: string;

    constructor(textop: string, colorp: string, typep: string = '') {
      this.texto = textop;
      this.color = colorp;
      this.type = typep;
    }
  }
}
