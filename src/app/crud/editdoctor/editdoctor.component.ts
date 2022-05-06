import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClnicService } from 'src/app/clnic.service';

@Component({
  selector: 'app-editdoctor',
  templateUrl: './editdoctor.component.html',
  styleUrls: ['./editdoctor.component.css']
})
export class EditdoctorComponent implements OnInit {

  constructor(private router:ActivatedRoute,private service:ClnicService) { }

  update(){

    this.service.updateDoctor(this.id,this.doctorGroup.value).subscribe(res=>{
      alert("data updated")
    })

  }
  id:number
  user:any;
  
  doctorGroup = new FormGroup({
    dName: new FormControl('',[Validators.required]),
    dEmail: new FormControl('',[Validators.email]),
    dExp:new FormControl('',[Validators.required]),
    dAge:new FormControl('',[Validators.required]),

  })

  ngOnInit() {
    this.id =  this.router.snapshot.params['id'];
    this.service.getDoctorById(this.id).subscribe(res=>{

        console.log(res)
        this.user = res;
    })
    
  }

}
