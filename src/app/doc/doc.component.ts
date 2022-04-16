import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DocService } from '../doc.service';
import { DocdetailComponent } from '../docdetail/docdetail.component';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css']
})
export class DocComponent implements OnInit {

  constructor(private service:DocService) { }

  doctors:any[]=[];
  getbyid(id:number){

      
  } 

  delete(id:number){

    this.service.deleteDoctor(id).subscribe((data)=>{

      this.service.getAllDoctors().subscribe((data)=>{
        this.doctors=data;
      })

      
    })
  }

  ngOnInit() {

    this.service.getAllDoctors().subscribe((data)=>{
      console.log(data);
      this.doctors=data;
    })
  }

}
