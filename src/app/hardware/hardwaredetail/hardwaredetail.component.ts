import {Component, Input, OnInit} from '@angular/core';
import {Hardware} from "../../model/hardware";
import {ActivatedRoute} from "@angular/router";
import {HardwareService} from "../hardware.service";

@Component({
  selector: 'app-hardwaredetail',
  templateUrl: './hardwaredetail.component.html',
  styleUrls: ['./hardwaredetail.component.css']
})
export class HardwaredetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private hardwareService: HardwareService
  ) { }

  hardware: Hardware;

  ngOnInit(): void {
    this.getHardware();
  }

  getHardware(){
    let id = this.route.snapshot.paramMap.get('id');
    this.hardwareService.getOneHardware(id)
      .subscribe(hardware => {
        console.log(hardware);
        this.hardware = hardware;
      })
  }

}
