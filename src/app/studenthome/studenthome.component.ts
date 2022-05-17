import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuard } from '../auth/auth.guard';
import { AuthService } from '../auth/auth.service';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Borrow } from '../borrow';

@Component({
  selector: 'app-studenthome',
  templateUrl: './studenthome.component.html',
  styleUrls: ['./studenthome.component.css']
})
export class StudenthomeComponent implements OnInit {
  isLoggedIn$ !:Observable<Boolean>;
  id!:number;

  books!: Book[];

  borrow:Borrow=new Borrow();

  selected:string='Borrow';
  
  constructor(private bookservice:BookService,private router:Router,private authService:AuthService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.isLoggedIn$=this.authService.isLoggedIn;
    this.getBooks();
  }
  

  getBooks(){
    this.bookservice.getBookList().subscribe(
      data => {
         console.log(data);
        this.books=data; 
      }); 
    }

    bookDetailes(id:number){
      this.router.navigate(['book-detailes',id]);
    }

    borrowBook(book_id:number){
      this.borrow.sid=this.id;
      this.borrow.book_id=book_id;
      console.log(this.borrow);
      this.bookservice.borrowBook(this.borrow).subscribe(data=>{
        this.selected='Borrowed'
          
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
