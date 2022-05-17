import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { LoginComponent } from './login/login.component';
import { MyBooksComponent } from './my-books/my-books.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudenthomeComponent } from './studenthome/studenthome.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
     {path:'',redirectTo:'books',pathMatch:'full'},
     {path:'login',component:LoginComponent},
    // { path: '**', redirectTo: ''},
     {path:'books', component: BookListComponent, canActivate:[AuthGuard]},
     {path:'create-book',component:CreateBookComponent, canActivate:[AuthGuard]},
     {path:'update-book/:id',component:UpdateBookComponent, canActivate:[AuthGuard]},
     {path:'book-detailes/:id',component:BookDetailsComponent, canActivate:[AuthGuard]},
     {path:'students', component: StudentListComponent, canActivate:[AuthGuard]},
    {path:'create-student',component:CreateStudentComponent, canActivate:[AuthGuard]},
    {path:'update-student/:id',component:UpdateStudentComponent, canActivate:[AuthGuard]},
    {path:'student-detailes/:id',component:StudentDetailsComponent, canActivate:[AuthGuard]},

    {path:'student-home/:id',component:StudenthomeComponent,canActivate:[AuthGuard]},
    {path:'my-books/:id', component:MyBooksComponent,canActivate:[AuthGuard]}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
