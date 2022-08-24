import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocService {

  constructor(private httpClient: HttpClient) { }

  public getAllDoctors(): Observable<any> {

    return this.httpClient.get("http://localhost:8080/getalldoctors");

  }

  public deleteDoctor(id:number): Observable<any> {

    return this.httpClient.delete("http://localhost:8080/deletedoctor/"+id);
  }

  public getDoctorById(id:number): Observable<any> {

    return this.httpClient.get("http://localhost:8080/getdoctor/"+id);
  }
   
}
