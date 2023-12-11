import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    
  }
  registerForm = new FormGroup({
    
    FirstName: new FormControl(""),
    MiddleName: new FormControl(""),
    LastName: new FormControl(""),
    email: new FormControl(""),
    PhoneNumber: new FormControl(""),
    password: new FormControl(""),
    ConfirmPassword: new FormControl("")
    
  });
  registerSubmited(){
    debugger
    console.log(this.registerForm.value);
  }

}
