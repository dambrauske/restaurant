import { Injectable } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8000';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  constructor(private http: HttpClient) {}

  getRestaurantInfo(): Observable<Object> {
    return this.http.get(`${baseUrl}/restaurant`);
  }
}
