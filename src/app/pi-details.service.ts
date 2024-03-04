import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PIProfileData {
  id: string;
  name: string;
  address: string;
  specialty: string;
  description: string;
  rating: number;
  reviews?: Review[];
}

export interface Review {
  id: string;
  date: string;
  reviewText: string;
}

@Injectable({
  providedIn: 'root',
})

export class PiDetailsService {
  private apiUrl = `http://localhost:3000/piProfiles`;

  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getProfileDetailsData(id: string): Observable<PIProfileData> {
    const profileUrl = `${this.apiUrl}/${id}`;
    return this.http.get<PIProfileData>(profileUrl, this.httpOptions);
  };

}
