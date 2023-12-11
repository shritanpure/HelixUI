import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent {
  email: string = 'sat@narola.email';
  password: string = 'nashik@123';

  constructor(private authService: AuthService, private router: Router) {}

 loginForm: FormGroup = new FormGroup({
  email: new FormControl,
  password: new FormControl
 });
 login(){
  debugger
  if (this.authService.login(this.email, this.password)) {  
    this.router.navigate(['/dashboard'])
  } else {
    alert('Invalid credentials. Please try again.');
  }
 }
}