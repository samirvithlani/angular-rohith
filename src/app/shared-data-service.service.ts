import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataServiceService {
  name:any = "jay";
  //created object of Behaviour subject and pass name to behaviour subject...
  public content  = new BehaviorSubject<any>(this.name)

  constructor() { }
}
