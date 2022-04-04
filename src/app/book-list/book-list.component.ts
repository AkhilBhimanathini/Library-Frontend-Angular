import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  

   books!: Book[];

  constructor(private bookservice:BookService,private router:Router) {
   }

  ngOnInit(): void {
    
      this.getBooks();
  }

    getBooks(){
    this.bookservice.getBookList().subscribe(
      data => {
         console.log(data);
        this.books=data; 
      }); 
    }

    updateBook(id:number){
      this.router.navigate(['update-book',id]);

  }

    deleteBook(id:number){
      this.bookservice.deletebook(id).subscribe(data=>{
         console.log(data);
         this.getBooks();
      })
    }

    bookDetailes(id:number){
      this.router.navigate(['book-detailes',id]);
    }

  //   this.books=[{
  //     "id":1,
  //     "name": "Data Science",
  //     "author": "Sathish",
  //     "category": "Computer Science"
  //   },
  //   {
  //     "id":1,
  //     "name": "Data Science",
  //     "author": "Sathish",
  //     "category": "Computer Science"

  //   }]


}
