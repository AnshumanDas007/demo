import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  loginUser = new FormGroup({
    userName : new FormControl('',[Validators.required,Validators.minLength(6),]),
    password : new FormControl('',[Validators.required,Validators.minLength(8)]),
  });
  get getUserName(){
    return this.loginUser.get('userName') as FormControl;
  }
  get getPassword(){
    return this.loginUser.get('password') as FormControl;
  }
  ngOnInit(): void {
  }
  onLogin(loginUser: FormGroup){
    this.router.navigate(['/Home']);
  }
}
