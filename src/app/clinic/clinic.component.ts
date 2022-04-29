import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClnicService } from '../clnic.service';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.css']
})
export class ClinicComponent implements OnInit {

  constructor(private service:ClnicService) { }

  doctorGroup = new FormGroup({
    doctorName: new FormControl('',[Validators.required]),
    dEmail: new FormControl('',[Validators.email]),
    dExp:new FormControl('',[Validators.required]),
    dAge:new FormControl('',[Validators.required]),

  })

  submit(){
    
    this.service.AddDoctor(this.doctorGroup.value).subscribe(res=>{
        console.log(res)
    })

  }

  ngOnInit() {
  }

}
