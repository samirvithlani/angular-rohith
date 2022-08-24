import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input() inputFromParent:any;
  @Output() outputFromChild: EventEmitter<string> = new EventEmitter<string>();
  outputText :string = "Hi this is output from child class to parent class...";
  sendDataToParent(){
    this.outputFromChild.emit(this.outputText);
  }

  ngOnInit() {
    console.log(this.inputFromParent);
  
  }

}
