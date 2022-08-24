import { Component, OnInit } from '@angular/core';
import { SharedDataServiceService } from '../shared-data-service.service';

@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.css']
})
export class LeftsidebarComponent implements OnInit {

  constructor(public sharedService:SharedDataServiceService) { }

  name:any;

  ngOnInit() {

    this.name = this.sharedService.name;

  }

}
