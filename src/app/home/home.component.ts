import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employee:any[] = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "handle": "@Leanne",
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "handle": "@Shanna",
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "handle": "@Nathan",
    },
    {
      "id": 4,
      "name": "Raj purohit",
      "username": "raj",
      "handle": "@raj",
    },
    {
      "id": 5,
      "name": "Tejas Shah",
      "username": "tejas",
      "handle": "@tejas",
    },


  ]

  constructor() { }

  ngOnInit() {
  }

}
