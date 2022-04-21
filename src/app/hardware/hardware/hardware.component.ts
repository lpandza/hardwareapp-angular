import { Component, OnInit } from '@angular/core';
import {HardwareService} from "../hardware.service";
import {Hardware} from "../../model/hardware";
import {Router} from "@angular/router";

@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.component.html',
  styleUrls: ['./hardware.component.css']
})
export class HardwareComponent implements OnInit {

  constructor(
    private router: Router,
    private hardwareService: HardwareService
  ) { }

  hardware: Hardware[];
  selectedHardware: Hardware;

  ngOnInit(): void {
    this.getHardware();
  }

  getHardware(): void{
    this.hardwareService.getHardware()
      .subscribe(hardware => this.hardware = hardware);
  }

  onClick(h: Hardware) {
    this.selectedHardware = h;
    this.router.navigate(['/hardware', this.selectedHardware.code]);
  }

  onSubmit(code: string, name: string, type: string, quantityV: string, priceV: string) {
    code = code.trim();
    name = name.trim();

    let quantity = Number(quantityV);
    let price = Number(priceV);

    if (!code || !name || !quantity || !price || !type){
      console.log("return");
      return;
    }

    this.hardwareService.addHardware({code, name, type, quantity, price} as Hardware)
      .subscribe(hardware => {
        this.hardware.push(hardware);
      })

  }

  delete(h: Hardware) {
    this.hardwareService.deleteHardware(h)
      .subscribe();
    let index = this.hardware.indexOf(h);
    this.hardware.splice(index, 1);
  }
}
