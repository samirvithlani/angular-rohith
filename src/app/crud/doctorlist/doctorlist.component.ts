import { Component, OnInit } from '@angular/core';
import { ClnicService } from 'src/app/clnic.service';






@Component({
  selector: 'app-doctorlist',
  templateUrl: './doctorlist.component.html',
  styleUrls: ['./doctorlist.component.css']
})
export class DoctorlistComponent implements OnInit {

  constructor(private service: ClnicService) { }
  doctorList: [] = [];
  cols: any[] = []

  deleteDoctor(id: number) {

    this.service.deleteDoctor(id).subscribe(res => {
      //if else...
      this.service.getAllDoctors().subscribe(data => {
        this.doctorList = data;
      })

    })

  }
  ngOnInit() {

    this.service.getAllDoctors().subscribe(data => {
      this.doctorList = data;
      console.log("-", this.doctorList)
    })

  }

}
