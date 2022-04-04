import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient:HttpClient) { }
  
  getStudentList():Observable<Student[]>{
    let url ="/api/get-all-students";
    return this.httpClient.get<Student[]>(url);
  }

  addStudent(student:Student):Observable<Object>{
    let url='/api/create/student/';
    return this.httpClient.post(url,student);
  }

  getStudentById(id:number): Observable<Student>{
    let url='/api/getstudent';
    return this.httpClient.get<Student>(`${url}/${id}`);
  }

  updateStudent(id:number,student:Student):Observable<Object>{
    let url='/api/update/student';
    return this.httpClient.put(`${url}/${id}`,student);
  }

  deleteStudent(id:number):Observable<Object>{
    let url='/api/delete/student';
    return this.httpClient.delete(`${url}/${id}`);
  }
}
