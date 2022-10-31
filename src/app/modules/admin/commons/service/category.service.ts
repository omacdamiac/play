import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  newOption(id: number, cat: IOptions): Observable<IOptions> {
    return this.http.post<IOptions>(this.apiUrl + ENDPOINT.GET_CATEGORY + '/' + id, cat);
  }

  updateOption(cat: IOptions): Observable<IOptions> {
    return this.http.put<IOptions>(
      this.apiUrl + ENDPOINT.GET_CATEGORY + '/' + cat.id,
      cat
    );
  }

  deleteOption(optionId: number): Observable<IOptions> {
    return this.http.delete<IOptions>(
      this.apiUrl + ENDPOINT.GET_CATEGORY + '/' + optionId
    );
  }
}
