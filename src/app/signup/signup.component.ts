import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

import {AuthService} from '../auth.service';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

import { Router} from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  p:string=""
  cp:string=""
  myForm: FormGroup;
  message:string="";
  userError:any;
  constructor(public fb: FormBuilder, public authService:AuthService,public router:Router) {
    this.myForm = this.fb.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required, Validators.minLength(8)]],
      confirmPassword:['',[Validators.required]],
    },{
      validators:this.checkIfMatchingPasswords("password","confirmPassword")
    })
   }

   checkIfMatchingPasswords(passwordKey:string,confirmPasswordKey:string){
      return(group:FormGroup)=>{
        let password = group.controls[passwordKey];
        let confirmPassword = group.controls[confirmPasswordKey];

        if(password.value == confirmPassword.value){
          return;
        } else{
          confirmPassword.setErrors({
            notEqualToPassword:true
          })
        }
      }
   }
  onSubmit(signupform){
    console.log(signupform.value)
    let email:string = signupform.value.email;
    let password:string = signupform.value.password;
    let firstName:string = signupform.value.firstName;
    let lastName:string = signupform.value.lastName;

    this.authService.signup(email, password, firstName, lastName).then((user:any) =>{
      firebase.firestore().collection("users").doc(user.uid).set({
        first_name: signupform.value.firstName,
        last_name: signupform.value.lastName,
        email: signupform.value.email,
        photoURL: user.photoURL,
        interests: "",
        bio: "",
        hobbies: "",
        age:21,
        password: signupform.value.password
      }).then(() => {
        this.message = "you have been signed up successfully please login"
        this.router.navigate(['/myblogs'])
      })
    }).catch((error) => {
      console.log(error);
      this.userError=error;
    })

  }
  same(){
    if(this.cp==this.p){
      return false
    }
    else{
      return true
    }
  }

  ngOnInit(): void {
  }
  check:any;
  checkLoggedIn(){
    this.check = firebase.auth().currentUser;
    if(this.check)
      return false;
    else
      return true;
  }
}
