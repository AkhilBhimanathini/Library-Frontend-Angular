import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  isLoggedIn$ !:Observable<Boolean>;
  isLoggedOut$ !:Observable<Boolean>;

  constructor(private authService:AuthService) { }

  ngOnInit(): void{
    this.isLoggedIn$=this.authService.isLoggedIn;
  
  }

  onLogout(){
    this.authService.logout();
  }

}
