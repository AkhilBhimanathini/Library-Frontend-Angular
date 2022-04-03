import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UpdateBookComponent } from './update-book/update-book.component';

const routes: Routes = [
     {path:'',redirectTo:'books',pathMatch:'full'},
     {path:'login',component:LoginComponent},
     {path:'books', component: BookListComponent},
     {path:'create-book',component:CreateBookComponent},
     {path:'logout',redirectTo:'login',pathMatch:'full'},
     //{path:'',redirectTo:'books',pathMatch:'full'},
     {path:'update-book/:id',component:UpdateBookComponent},
     {path:'book-detailes/:id',component:BookDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
