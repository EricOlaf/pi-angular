import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';


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

  postContactFormData(formData:FormGroup):Observable<PostResponse>{
    return this.http.post<PostResponse>(this.apiUrl, formData)
  }

}
