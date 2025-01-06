import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-signup',
  imports: [MatFormFieldModule,MatInputModule,MatButtonModule,RouterModule, RouterOutlet,FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  signupUsers:any[]=[];

  signupObj:any={
    userName:'',
    email:'',
    password:'',
    confirmPassword:'',


  };

}
