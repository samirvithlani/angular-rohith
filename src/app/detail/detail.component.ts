import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  //very first time constroctor is getting called
  //use of constructor is to initialize the values in angular
  //ActivatedRout routt = new ActivatedRoute()
  //route:ActivatedRoute
  id:any;
  constructor(private routs:ActivatedRoute) { }

  //very first time ngOnInit is getting called
  ngOnInit() {

    console.log(this.routs.snapshot.params['uuid'])
    this.id = this.routs.snapshot.params['uuid'];
    
  }


}
