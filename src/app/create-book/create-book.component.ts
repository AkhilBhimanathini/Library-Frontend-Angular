import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  book : Book=new Book();
  
  constructor(private bookservice: BookService,private router:Router) { }

  ngOnInit(): void {
  }

  addBook(){
    this.bookservice.addbook(this.book).subscribe(data=>{
          console.log(data);
          this.goToBookList();
    },
    error=>console.log(error));  
  }

  goToBookList(){
    this.router.navigate(['/books']);
  }

  onSubmit(){
    console.log(this.book);
    this.addBook();
  }

}
