import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface PostResponse {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  private apiUrl = "http://localhost:3000/contactForm"

  constructor(private http: HttpClient) { }

  postContactFormData(formData:ContactFormData):Observable<PostResponse>{
    return this.http.post<PostResponse>(this.apiUrl, formData)
  }

}
