import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocService } from '../doc.service';

@Component({
  selector: 'app-docdetail',
  templateUrl: './docdetail.component.html',
  styleUrls: ['./docdetail.component.css']
})
export class DocdetailComponent implements OnInit {

  constructor(private service:DocService,private route:ActivatedRoute) { }
  id:number;
  doctor:any;


  ngAfterContentInit(){

    this.id = this.route.snapshot.params['id'];
    this.service.getDoctorById(this.id).subscribe((data)=>{

        this.doctor=data;

    })
  
  }
  ngAfterViewInit(){

    
  }

  ngOnChanges(){

  }
  ngOnInit() {
    
    
    this.id = this.route.snapshot.params['id'];
    this.service.getDoctorById(this.id).subscribe((data)=>{

        this.doctor=data;

    })
  }

}
