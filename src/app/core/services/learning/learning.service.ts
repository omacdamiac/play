import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ENDPOINT } from '../../constants/endpoint';
import { ICategory } from '../../models/options.model';

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
};

@Injectable({
  providedIn: 'root',
})
export class LearningService {
  state: IStateUI = {
    item: undefined,
    item2: undefined,
    item3: undefined,
    item4: undefined,
    item5: undefined,
  };

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

  getOptions(): Observable<ICategory[]> {
    const api: string = `${environment.apiBase}${ENDPOINT.GET_OPTIONS}`;
    return this.http.get<ICategory[]>(api);
  }

  getOption(item: number): Observable<ICategory> {
    const api: string = `${environment.apiBase}${ENDPOINT.GET_OPTIONS}/${item}`;
    return this.http.get<ICategory>(api);
  }
}
