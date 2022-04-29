import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClnicService {

  constructor(private http:HttpClient) { }

  public AddDoctor(Data):Observable<any>{
    var d ={
      dName:Data.doctorName,
      dEmail:Data.dEmail,
      dExp:Data.dExp,
      dAge:Data.dAge
    }

    return this.http.post("http://localhost:8080/adddoctor",d);
  }
}
