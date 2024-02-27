import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8000';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/addReservation`, data);
  }
}
