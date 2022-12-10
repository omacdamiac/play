import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENDPOINT } from 'src/app/core/constants/endpoint';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SesionService {
  apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiBase;
   }

   getSesion(): Observable<any> {
    return this.http.get<any>(this.apiUrl + ENDPOINT.SET_BRAND)
  }

  deleteSesion(id: number): Observable<any> {
    return this.http.delete<any>(this.apiUrl + ENDPOINT.SET_BRAND + '/' + id);
  }
}
