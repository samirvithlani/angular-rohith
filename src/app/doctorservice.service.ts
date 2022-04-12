import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorserviceService {

  constructor(private htttpClient:HttpClient) { }

  public getAllDoctors():Observable<any>{

    return this.htttpClient.get("http://localhost:8080/getalldoctors");
  }

  public deleteDoctor(id:number):Observable<any>{

    return this.htttpClient.delete("http://localhost:8080/deletedoctor/"+id);
  }
}
