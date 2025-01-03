import { Routes } from '@angular/router';
import { HelppComponent } from './helpp/helpp.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NewBookComponent } from './new-book/new-book.component';

export const routes: Routes = [
    { path: '', component:HomeComponent },
    {path:'help', component:HelppComponent},
    {path:'home' , component:HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'add',component:NewBookComponent}
    
    
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}