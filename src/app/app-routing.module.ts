import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UpdateBookComponent } from './update-book/update-book.component';

const routes: Routes = [
     {path:'',redirectTo:'books',pathMatch:'full'},
     {path:'login',component:LoginComponent},
    // { path: '**', redirectTo: ''},
     {path:'books', component: BookListComponent, canActivate:[AuthGuard]},
     {path:'create-book',component:CreateBookComponent, canActivate:[AuthGuard]},
     {path:'update-book/:id',component:UpdateBookComponent, canActivate:[AuthGuard]},
     {path:'book-detailes/:id',component:BookDetailsComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
