import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropdownserviceService {

  constructor(private http:HttpClient) { }

  public getStates():Observable<any>{

    return this.http.get("http://localhost:8080/states");
  }
  
  public getCities(stateId:Number):Observable<any>{

    return this.http.get("http://localhost:8080/cities/"+stateId);
  }
}
