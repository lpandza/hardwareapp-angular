import { Injectable } from '@angular/core';
import {Hardware} from "../model/hardware";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HardwareService {

  hardware: Hardware[] = [
    {name: "AMD Ryzen 5", price: 500},
    {name: "Intel i5", price: 600},
    {name: "Intel i7", price: 800},
    {name: "Nvidia GTX 770", price: 200},
  ];

  constructor() { }

  getHardware(): Observable<Hardware[]>{
    return of(this.hardware);
  }

}
