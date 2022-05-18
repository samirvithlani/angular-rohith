import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routerdemo',
  templateUrl: './routerdemo.component.html',
  styleUrls: ['./routerdemo.component.css']
})
export class RouterdemoComponent implements OnInit,DoCheck {

  constructor(private router:Router) { }
  ngDoCheck(): void {
    
   // this.router.navigateByUrl("/blogs")
  }

  age:number = 15;


  change(){

    //we are aboute to change compoanet using navigate/ navigate by url
    this.router.navigateByUrl('/blogs')

  }

  ngOnInit() {

    

    if(this.age>=10){

        //we need to redirect on any other component which is registerd in app routing modeule.ts file
        //this.router.navigateByUrl('/blogs')
        //this.router.navigate(['blogs'])
        

    }

  }

}
