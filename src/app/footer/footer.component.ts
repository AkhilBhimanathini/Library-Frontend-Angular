import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  isLoggedIn$ !:Observable<Boolean>;

  constructor(private authService:AuthService) { }

  ngOnInit(): void{
    this.isLoggedIn$=this.authService.isLoggedIn;
  }



}
