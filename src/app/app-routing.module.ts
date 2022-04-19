import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './login/signin/signin.component';
import { SignupComponent } from './login/signup/signup.component';
import { NewCompComponent } from './new-comp/new-comp.component';
import { PipeComponent } from './pipe/pipe.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [{path:"log",component:LoginComponent, children:[{path:"sin", component:SigninComponent},{path:"sup", component:SignupComponent}]},{path:"reg", component:RegistrationComponent},{path:"hom", component:HomeComponent},{path:"com", component:NewCompComponent},{path:"pip",component:PipeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
