import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent implements OnInit {

  constructor() { }
  MessageFromGoogle:string ="Hi this is Google !!!"

  message:string;
  dataFromyt(data){
    console.log(data);
    this.message = data
  }

  ngOnInit() {
  }

}
