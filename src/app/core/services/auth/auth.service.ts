import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ENDPOINT } from '../../constants/endpoint';
import { TOKEN } from '../../constants/text.const';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiBase;
  }

  authLogin(): Observable<any> {
    return this.http.get<any>(this.apiUrl + ENDPOINT.GET_USERS)
  }

  setToken(tk: string): void {
    sessionStorage.setItem(TOKEN,tk);
  }

  getToken() {
    return sessionStorage.getItem(TOKEN);
  }

  clearToken() {
    sessionStorage.removeItem(TOKEN);
  }

  sesion(sesion: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + ENDPOINT.SET_BRAND, sesion)
  }

}
