import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { AuthGuard } from './auth.guard';
import { ViewComponent } from './view/view.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [{
  path: '', redirectTo: 'home', pathMatch: 'full'
},{
  path: 'home',component:HomeComponent
},{
  path: 'login', component:LoginComponent
},{
  path: 'myblogs', component: MyblogsComponent,
  canActivate: [AuthGuard]
},{
  path: 'edit-profile/:id', component: EditProfileComponent,
  canActivate: [AuthGuard]
},{
  path: 'profile/:id', component: ProfileComponent,
  canActivate: [AuthGuard]
},{
  path: 'view/:postId', component: ViewComponent,
  canActivate: [AuthGuard]
},{
  path: '**', redirectTo:'home'
}]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
