import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User =new User();
  
  constructor(private router:Router,private userservice:UserserviceService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.router.navigate(['/']);   
  }

}
