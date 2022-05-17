import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Student } from '../student';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!:FormGroup;
  msg!:string;
  private formSubmitAttempt!:boolean;

  student:Student =new Student();
  userLogged:Student=new Student();
  constructor(private fb:FormBuilder,private authService:AuthService,private service: UserserviceService) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      name:['',Validators.required],
      password:['',Validators.required]
    })
  }

  onSubmit(){
    if(this.form.valid){
      this.service.getlogin(this.form.value).subscribe(data=>{ 
        if(data!=null){
          this.userLogged=data;
           this.authService.login(this.form.value,this.userLogged.id);
        }
   },
    error=>{
      console.log(error);
      this.msg="Invalid Credentials. Please enter valid email and password"
    }
   );
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
