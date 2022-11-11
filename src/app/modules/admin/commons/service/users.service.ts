import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENDPOINT } from 'src/app/core/constants/endpoint';
import { IUser } from 'src/app/core/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiBase;
  }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.apiUrl + ENDPOINT.GET_USERS);
  }

  newUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(this.apiUrl + ENDPOINT.GET_USERS, user);
  }

  updateUser(user: IUser): Observable<IUser> {
    return this.http.put<IUser>(
      this.apiUrl + ENDPOINT.GET_USERS + '/' + user.id,
      user
    );
  }

  deleteUser(userId: number): Observable<IUser> {
    return this.http.delete<IUser>(
      this.apiUrl + ENDPOINT.GET_USERS + '/' + userId,
    );
  }

  upload(file: any) {
    return this.http.post(this.apiUrl + ENDPOINT.GET_USERS , file)
  }
}
