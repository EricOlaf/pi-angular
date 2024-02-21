import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PiDetailsService {
  @Input() id: number = 0;

  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private apiUrl = `http://localhost:3000/piProfiles/${this.id}`;
  getProfileDetailsData(id: string): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
