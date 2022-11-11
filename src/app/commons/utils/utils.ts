import { LIST_PROFILE } from 'src/app/core/constants/text.const';
import { ILIST_PROFILE, IUser } from 'src/app/core/models';

export class UTILS {
  static getUser(jwt: string | null): IUser {
    const userData = this.decode(String(jwt));
    return userData;
  }
  static decode(tk: string): IUser {
    const dataTk = JSON.parse(atob(tk));
    return dataTk;
  }
  static points(pt: any): any{
    const arraObjTrue = [];
    const arraObjFalse = [];
    for (let p in pt) {
      const answer = pt[p].answer;
      if (answer === false) {
        arraObjFalse.push(answer);
      } else {
        arraObjTrue.push(answer);
      }
      return ((arraObjTrue.length + arraObjFalse.length) - arraObjFalse.length) / 5;
    }
  }

  // static getRol(rol: number): ILIST_PROFILE[] {
  //  const setRol =  LIST_PROFILE.filter((r: ILIST_PROFILE) => {
  //     if(r.id === rol) {
  //       return r
  //     }
  //   });
  //   return setRol;
  // }
}
