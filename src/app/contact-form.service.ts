import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactFormResponse {
  id: string
  name: string
  email: string
  message:string
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

  postContactFormData(formData:ContactFormResponse):Observable<ContactFormResponse>{
    return this.http.post<ContactFormResponse>(this.apiUrl, formData, this.httpOptions)
  }

}
