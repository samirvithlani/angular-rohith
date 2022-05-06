import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

  constructor() { }

  ammount: number = 123456;
  date = new Date();
  marks = 123.4578;
  ages :any[] = [12,22,34,45,56,67,78,89,90];

  name:string = "royal";

  user = {
    name: 'John',
    age: 30
  }

  ngOnInit() {
  }

}
