import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  constructor() { }
  @Input() fromParent:string;
  @Output() output:EventEmitter<string> = new EventEmitter<string>();
  outputText :string = "this is youtube component coming as child component to google";

  sendDataToParent(){

    this.output.emit(this.outputText);
  }
  ngOnInit() {
  }

}
