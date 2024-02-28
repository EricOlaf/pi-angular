import { Review } from './pi-details.service';
import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PIProfileData {
  id: string;
  name: string;
  address: string;
  specialty: string;
  description: string;
  rating: number;
  reviews: Review[];
}

@Injectable({
  providedIn: 'root',
})
export class PiListService {
  private piListUrl = 'http://localhost:3000/piProfiles';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getPIList(): Observable<any> {
    return this.http.get<any>(this.piListUrl, this.httpOptions);
  }
  
}
