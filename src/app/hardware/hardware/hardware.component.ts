import { Component, OnInit } from '@angular/core';
import {HardwareService} from "../hardware.service";
import {Hardware} from "../../model/hardware";

@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.component.html',
  styleUrls: ['./hardware.component.css']
})
export class HardwareComponent implements OnInit {

  constructor(private hardwareService: HardwareService) { }

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
  }
}
