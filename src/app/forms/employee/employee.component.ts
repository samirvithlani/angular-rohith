import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  employeeForm = new FormGroup({
    
    fullName: new FormControl("",[Validators.required,Validators.maxLength(7),Validators.minLength(3)]),
    email: new FormControl("",[Validators.email]),
    phoneno:new FormControl("",[Validators.minLength(3)]),
    password:new FormControl("",[Validators.required]),
    cars: new FormControl(""),
    gender:new FormControl(""),
    hobbies:new FormControl("")

  });

  submit(){
    console.log(this.employeeForm);
    console.log("fullname = ",this.employeeForm.value.fullName);
    console.log("email = ",this.employeeForm.value.email);
    console.log("phoneno = ",this.employeeForm.value.phoneno);
    console.log("password = ",this.employeeForm.value.password);
    console.log("cars = ",this.employeeForm.value.cars);
    console.log("GNEDER = ",this.employeeForm.value.gender);
    console.log("Hobbies = ",this.employeeForm)

  }


  ngOnInit() {
  }

}
