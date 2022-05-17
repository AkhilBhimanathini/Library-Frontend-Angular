import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit {
  isLoggedIn$ !:Observable<Boolean>;
  id!:number;

  books!: Book[];
  

  constructor(private route:ActivatedRoute,private authService:AuthService,private router:Router,private bookservice:BookService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.isLoggedIn$=this.authService.isLoggedIn;
    this.getBooks();
  }

  getBooks(){
    this.bookservice.borrowList(this.id).subscribe(
      data => {
         console.log(data);
        this.books=data; 
      }); 
    }

    bookDetailes(id:number){
      this.router.navigate(['book-detailes',id]);
    }

    deleteBorrow(book_id:number){
      this.bookservice.borrowDelete(this.id,book_id).subscribe(data=>{
        console.log(data);
        this.getBooks();
      })
    }

    studenthome(){
      this.router.navigate(['student-home',this.id])
    }

    mybooks(){
      this.router.navigate(['my-books',this.id]);
    }

    onLogout(){
      this.authService.logout();
    }
  
}
