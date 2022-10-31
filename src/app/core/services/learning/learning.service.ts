import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ENDPOINT } from '../../constants/endpoint';
import { ICategory } from '../../models';

export interface IStateUI {
  item:
    | { id: number; name: string; img: string; answer: boolean | null }
    | undefined;
  item2:
    | { id: number; name: string; img: string; answer: boolean | null }
    | undefined;
  item3:
    | { id: number; name: string; img: string; answer: boolean | null }
    | undefined;
  item4:
    | { id: number; name: string; img: string; answer: boolean | null }
    | undefined;
  item5:
    | { id: number; name: string; img: string; answer: boolean | null }
    | undefined;
}

@Injectable({
  providedIn: 'root',
})
export class LearningService {
  private displayModal = new BehaviorSubject<boolean>(false);
  displayModal$ = this.displayModal.asObservable();
  setStateDisplay(data: boolean) {
    this.displayModal.next(data);
  }

  getStateDisplay() {
    return this.displayModal.getValue();
  }

  state: IStateUI = {
    item: undefined,
    item2: undefined,
    item3: undefined,
    item4: undefined,
    item5: undefined,
};

  // private options = new BehaviorSubject();
  private options = new BehaviorSubject({});
  options$ = this.options.asObservable();
  constructor(private http: HttpClient) {}

  setState(data: any) {
    this.state = Object.assign({ ...this.state, ...data });
    this.options.next(this.state);
  }

  getState() {
    return this.options.getValue();
  }

  clearState() {
    this.options.next({});
  }

  getListCategory(): Observable<ICategory[]> {
    const api: string = `${environment.apiBase}${ENDPOINT.GET_CATEGORY}`;
    return this.http.get<ICategory[]>(api);
  }

  getOption(item: number): Observable<ICategory> {
    const api: string = `${environment.apiBase}${ENDPOINT.GET_CATEGORY}/${item}`;
    return this.http.get<ICategory>(api);
  }
}
