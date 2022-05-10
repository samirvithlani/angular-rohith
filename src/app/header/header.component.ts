import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  dName:string;
  dEmail:string;

  ngOnInit() {

    this.dName = localStorage.getItem('dname')
    this.dEmail = sessionStorage.getItem('demail')
  }

}
