import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  
  constructor(private http:HttpClient) { }

  getlogin(user:Student):Observable<Student>{
    
    let url='/api/login';
    return this.http.post<Student>(url,user);
  }

  


}
