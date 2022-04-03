import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  
  id!:number;
  book : Book=new Book();
  constructor(private bookservice:BookService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
 
    this.id=this.route.snapshot.params['id'];
    console.log(this.id);
    this.bookservice.getBookById(this.id).subscribe(data=>{
       this.book=data;
    }, error=> console.log(error));
    
  }

  onSubmit(){
    this.bookservice.updateBook(this.id,this.book).subscribe(data=>{
      console.log(data);
      this.goToBookList();
    },error=>console.log(error));
  }

 goToBookList(){
  this.router.navigate(['/books']);
}

}

