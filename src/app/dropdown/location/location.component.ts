import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DropdownserviceService } from 'src/app/dropdownservice.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor(private service: DropdownserviceService) {
    
   }

  states: any[] = [];
  cities: any[] = [];

  locationForm = new FormGroup({

    states:new FormControl(''),
    cities:new FormControl(''),
    married:new FormControl(''),
    hobbies:new FormArray([])
  });
  
  submit(){

    console.log(this.locationForm.value);
    
  }

  ngOnInit() {

    this.service.getStates().subscribe(data => {

      this.states = data;
      console.log(this.states);
    });
    
  }
  stateChange(stateId:Number){

  this.service.getCities(stateId).subscribe(data => {

    this.cities = data;
    
  })
  }

}
