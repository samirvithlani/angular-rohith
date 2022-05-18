import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  constructor(private service: LoginService) { }

  userLoginGroup = new FormGroup({
    dName: new FormControl(''),
    dEmail: new FormControl('')
  })
  login() {

    var body = new FormData();
    body.append('dname', this.userLoginGroup.get('dName').value);
    body.append('demail', this.userLoginGroup.get('dEmail').value);

    this.service.userLogin(body).subscribe(data => {

      console.log("loggedin user data...",data);
      if(data!==null){
        localStorage.setItem('dname', data.dName);
        localStorage.setItem('demail', data.dEmail);
        sessionStorage.setItem('dname', data.dName);
        sessionStorage.setItem('demail', data.dEmail);
      }
    })

  }
  logout(){
    localStorage.removeItem('dname');
    localStorage.removeItem('demail');
  }

  ngOnInit() {
  }

}
