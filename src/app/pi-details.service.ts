import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PIProfileData {
  id: number;
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

  getProfileDetailsData(id: number): Observable<any> {
     const profileUrl = `${this.apiUrl}/${id}`
    return this.http.get<any>(profileUrl, this.httpOptions );
  }
}
