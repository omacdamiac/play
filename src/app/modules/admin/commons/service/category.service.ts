import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ENDPOINT } from 'src/app/core/constants/endpoint';
import { ICategory, IOptions } from 'src/app/core/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiBase;
  }

  getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(this.apiUrl + ENDPOINT.GET_CATEGORY);
  }

  newCategory(cat: ICategory): Observable<ICategory> {
    return this.http.post<ICategory>(this.apiUrl + ENDPOINT.GET_CATEGORY, cat);
  }

  updateCategory(cat: ICategory): Observable<ICategory> {
    return this.http.put<ICategory>(
      this.apiUrl + ENDPOINT.GET_CATEGORY + '/' + cat.id,
      cat
    );
  }

  deleteCategory(catId: number): Observable<ICategory> {
    return this.http.delete<ICategory>(
      this.apiUrl + ENDPOINT.GET_CATEGORY + '/' + catId
    );
  }

  // OPTIOMS
  getOption(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(this.apiUrl + ENDPOINT.GET_ITEM);
  }

  newOption(opt: ICategory): Observable<IOptions> {
    return this.http.post<IOptions>(this.apiUrl + ENDPOINT.GET_ITEM, opt);
  }

  updateOption(opt: IOptions): Observable<IOptions> {
    return this.http.put<IOptions>(
      this.apiUrl + ENDPOINT.GET_ITEM + '/' + opt.id,
      opt
    );
  }

  deleteOption(optionId: number): Observable<IOptions> {
    return this.http.delete<IOptions>(
      this.apiUrl + ENDPOINT.GET_ITEM + '/' + optionId
    );
  }
}
