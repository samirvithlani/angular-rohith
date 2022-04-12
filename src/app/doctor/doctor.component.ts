import { Component, OnInit } from '@angular/core';
import { DoctorserviceService } from '../doctorservice.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  constructor(private service:DoctorserviceService) { }

  doctors:any[]=[];

  deleteDoctor(id:number){

    this.service.deleteDoctor(id).subscribe((res)=>{

      

      this.service.getAllDoctors().subscribe((res)=>{
        this.doctors=res;
      })

    })
  }

  ngOnInit() {

    this.service.getAllDoctors().subscribe((res)=>{
      this.doctors=res;
    })
  }

}
