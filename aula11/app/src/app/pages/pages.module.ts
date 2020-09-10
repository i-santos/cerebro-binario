import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [LoginComponent, SignupComponent, HomeComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
