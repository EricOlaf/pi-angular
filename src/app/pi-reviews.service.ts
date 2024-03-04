import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PIProfileData } from './pi-details.service';

@Injectable({
  providedIn: 'root'
})
export class PiReviewsService {
    private apiUrl = `http://localhost:3000/piProfiles`;

  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  addPIReview(reviewText:string ,date:string ):Observable<PIProfileData>{
    return this.http.post<PIProfileData>(reviewText, date)
  }

  deletePIReview(reviewId: string, id: string): Observable<PIProfileData> {
     const profileReviewUrl = `${this.apiUrl}/${id}/reviews/${reviewId}`;
    console.log('YAY', reviewId, id);
    return this.http.delete<PIProfileData>(profileReviewUrl);
  };
}
