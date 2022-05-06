import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClnicService } from 'src/app/clnic.service';

@Component({
  selector: 'app-adddoctor',
  templateUrl: './adddoctor.component.html',
  styleUrls: ['./adddoctor.component.css']
})
export class AdddoctorComponent implements OnInit {

  doctorGroup = new FormGroup({
    doctorName: new FormControl('',[Validators.required]),
    dEmail: new FormControl('',[Validators.email]),
    dExp:new FormControl('',[Validators.required]),
    dAge:new FormControl('',[Validators.required]),

  })
  constructor(private service:ClnicService) { }

  submit(){
    
    this.service.AddDoctor(this.doctorGroup.value).subscribe(res=>{
        console.log(res)
    })

  }

  ngOnInit() {
  }

}
