import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ENDPOINT } from '../../constants/endpoint';
import { ICategory, IOptions } from '../../models/options.model';

@Injectable({
  providedIn: 'root'
})
export class LearningService {
  state: any = {
    item1: undefined,
    item2: undefined,
    item3: undefined,
  };
options = new BehaviorSubject<any>([]);
options$ = this.options.asObservable();
  constructor(
    private http: HttpClient,
  ) { }

  getOptions(): Observable<ICategory[]>{
    const api: string = `${environment.apiBase}${ENDPOINT.GET_OPTIONS}`;
    return this.http.get<ICategory[]>(api);
  } 

  getOption(item: number): Observable<ICategory>{
    const api: string = `${environment.apiBase}${ENDPOINT.GET_OPTIONS}/${item}`;
    return this.http.get<ICategory>(api);
  }

  setState(data: any) {
		this.state = Object.assign({ ...this.state, ...data });
		this.options.next(this.state);
	}

	getState() {
		return this.options.getValue();
	}

	clearState() {
		this.options.next(null);
	}
}
