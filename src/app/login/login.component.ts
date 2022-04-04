import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!:FormGroup;
  private formSubmitAttempt!:boolean;

  user:User =new User();
  constructor(private fb:FormBuilder,private authService:AuthService) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  onSubmit(){
    if(this.form.valid){
      this.authService.login(this.form.value);
    }
    this.formSubmitAttempt=true;
  }
}



  // isFieldInvalid(field: string){
  //   return (
  //     (!this.form.get(field).valid && this.form.get(field).touched)||
  //     (this.form.get(field)?.untouched && this.formSubmitAttempt)       
  //   );
  // }