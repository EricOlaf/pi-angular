import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PostResponse {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root'
})

export class ContactFormService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private apiUrl = "http://localhost:3000/contactFormPosts"

  constructor(private http: HttpClient) { }

  postContactFormData(formData:any):Observable<any>{
    return this.http.post<any>(this.apiUrl, formData)
  }

}
