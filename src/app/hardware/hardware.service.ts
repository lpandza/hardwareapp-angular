import { Injectable } from '@angular/core';
import {Hardware} from "../model/hardware";
import {catchError, Observable, of, tap, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HardwareService {


  constructor(
    private http: HttpClient
  ) { }

  private hardwareUrl = 'http://localhost:8080/hardware';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  getHardware(): Observable<Hardware[]>{
    return this.http.get<Hardware[]>(this.hardwareUrl)
      .pipe(
        catchError(err => this.handleError(err))
      );
  }

  getOneHardware(id: any){
    console.log(`${this.hardwareUrl}/${id}`)
    return this.http.get<Hardware>(`${this.hardwareUrl}/${id}`)
      .pipe(
        catchError(err => this.handleError(err))
      );
  }

  addHardware(hardware: Hardware){
    return this.http.post<Hardware>(this.hardwareUrl, hardware, this.httpOptions)
      .pipe(
        tap((newHardware: Hardware) => console.log(newHardware)),
        catchError(err => this.handleError(err))
      );
  }

  deleteHardware(hardware: Hardware){
    console.log(`${this.hardwareUrl}/${hardware.code}`)
    return this.http.delete(`${this.hardwareUrl}/${hardware.code}`, this.httpOptions)
      .pipe(
        catchError(err => this.handleError(err))
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
