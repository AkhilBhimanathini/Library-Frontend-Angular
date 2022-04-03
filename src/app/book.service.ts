import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
 // private baseURL="api/getbook";

  constructor(private httpClient:HttpClient) { }

  getBookList():Observable<Book[]>{
    let url ="/api/get-all-books";
    return this.httpClient.get<Book[]>(url);
  }

  addbook(book:Book):Observable<Object>{
    let url='/api/create/book/';
    return this.httpClient.post(url,book);
  }

  getBookById(id:number): Observable<Book>{
    let url='/api/getbook';
    return this.httpClient.get<Book>(`${url}/${id}`);
  }

  updateBook(id:number,book:Book):Observable<Object>{
    let url='/api/update/book';
    return this.httpClient.put(`${url}/${id}`,book);
  }

  deletebook(id:number):Observable<Object>{
    let url='/api/delete/book';
    return this.httpClient.delete(`${url}/${id}`);
  }

  

}
