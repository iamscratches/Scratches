import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import * as firebase from 'firebase/app';
import 'firebase/auth'

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { SignupComponent } from './signup/signup.component';
import { CreateComponent } from './create/create.component';

import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { PostComponent } from './post/post.component';
import { ViewComponent } from './view/view.component';
import { CommentsComponent } from './comments/comments.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';

let firebaseConfig = {
  apiKey: "AIzaSyAiwpTOkBFCp98f-nnYSdZAxzo9FaWu0fE",
  authDomain: "scratches-31f84.firebaseapp.com",
  databaseURL: "https://scratches-31f84.firebaseio.com",
  projectId: "scratches-31f84",
  storageBucket: "scratches-31f84.appspot.com",
  messagingSenderId: "310998638053",
  appId: "1:310998638053:web:d7714ddd4f78f19072630c",
  measurementId: "G-VTP94025BH"
}
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    HomeComponent,
    MyblogsComponent,
    SignupComponent,
    CreateComponent,
    PostComponent,
    ViewComponent,
    CommentsComponent,
    EditProfileComponent,
    ProfileComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule, 
    AngularEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
