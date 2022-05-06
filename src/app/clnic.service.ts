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

  public getAllDoctors():Observable<any>{

    return this.http.get("http://localhost:8080/getalldoctors");
    
  }

  public deleteDoctor(id):Observable<any>{

    return this.http.delete("http://localhost:8080/deletedoctor/"+id);
  }


  public getDoctorById(id):Observable<any>{

    return this.http.get("http://localhost:8080/getdoctor/"+id);
  }

  public updateDoctor(id,Data):Observable<any>{

    return this.http.put("http://localhost:8080/updatedoctor/"+id,Data);
  }
}
