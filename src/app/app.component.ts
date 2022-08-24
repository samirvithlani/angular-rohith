import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//this component will act as parent component
export class AppComponent {


    inputText:string = "Hi..Have a nice Day !!!";

    DataFromChild:string;
    reciveDataFromChild(data){

      this.DataFromChild = data;

    }

    title = 'learning';

    flag:boolean = false;
  


    name: string = 'Raj';
    age: number = 20;
    isMarried: boolean = false;
    
    student : any = {
        name: 'Raj',
        age: 30,
        isMarried: false
    }

    employee :any = {
        ename : 'Dhiraj',
        Salary : 2551531.25,
        isActive: true
    }

    subjects :any[] = [

      {
        name : 'Angular',
        marks : 80
      },
      {
        name : 'React',
        marks : 90
      },
      {
        name : 'Vue',
        marks : 95
      }

    ]

    bugs:any[] =[
      {
        name : 'Login Screen',
        isClosed : false,
        severity : 'High'
    
      },
      {
        name : 'Home Screen issue',
        isClosed : true,
        severity : 'Low'
      },
      {
        name : 'Dashboard issue',
        isClosed : false,
        severity : 'Low'
      },
    ]
    actors:any[] = [
      "Amitabh Bachchan",
      "Rajesh Khanna",
      "Rajnikanth",
      "Chiranhivi"
    ]
    
}
