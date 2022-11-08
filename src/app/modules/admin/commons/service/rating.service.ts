import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENDPOINT } from 'src/app/core/constants/endpoint';
import { IRating } from 'src/app/core/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiBase;
  }

  getRating(): Observable<IRating[]> {
    return this.http.get<IRating[]>(this.apiUrl + ENDPOINT.GET_RATING);
  }
  
  deleteRating(id: number): Observable<IRating> {
    return this.http.delete<IRating>(this.apiUrl + ENDPOINT.GET_RATING + '/' + id);
  }
}
