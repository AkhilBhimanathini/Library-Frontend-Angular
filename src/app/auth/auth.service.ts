import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Student } from '../student';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn=new BehaviorSubject<Boolean>(false);

  private admin=new BehaviorSubject<Boolean>(false);
  private student=new BehaviorSubject<Boolean>(false);

  get isLoggedIn(){
    return this.loggedIn.asObservable();
  }

  get isAdmin(){
    return this.admin.asObservable();
  }

  get isStudent(){
    return this.student.asObservable();
  }


  constructor(private router: Router) { }

   login(user: Student,id:number){
     if(user.name!='' && user.password!=''){
        this.loggedIn.next(true);
       if(user.name=='admin' && user.password=='123456'){
         this.admin.next(true);
         this.student.next(false);
         this.router.navigate(['/']);
       }
       else{
        this.admin.next(false);
         this.student.next(true);
         this.router.navigate(['/student-home',id]);
       }
     }

   }

   logout(){
     this.loggedIn.next(false);
     this.router.navigate(['/login']);
   }
}
