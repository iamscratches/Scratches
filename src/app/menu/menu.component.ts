import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase/app';
import 'firebase/auth'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  loggedIn: boolean;  
  logo: string = "assets/scratch-logo.png";
  logoText: string = "assets/scratches.png";
  profile:string = "/profile/";
  
  iwlt: number = 190;
  ihlt: number = 40;
  iwl: number = 60;
  ihl: number = 40;

  user:any;

  constructor() {
    this.user = firebase.auth().currentUser;    
    if(this.user){
      this.loggedIn = true;      
    }
    else{
      this.loggedIn=false;
    }

    firebase.auth().onAuthStateChanged((user) =>{
      if(user){
        this.loggedIn = true;
      }
      else{
        this.loggedIn=false;
      }
    })
    
   }

  ngOnInit(): void {
  }
  logout(){
    firebase.auth().signOut();
  }
  cuser:string;
  profilePath(){
    this.cuser = firebase.auth().currentUser.uid;
    this.profile = "/profile/" + this.cuser;
    return this.profile;
  }

}
