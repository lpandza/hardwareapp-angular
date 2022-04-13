import {Component, Input, OnInit} from '@angular/core';
import {Hardware} from "../../model/hardware";

@Component({
  selector: 'app-hardwaredetail',
  templateUrl: './hardwaredetail.component.html',
  styleUrls: ['./hardwaredetail.component.css']
})
export class HardwaredetailComponent implements OnInit {

  @Input() hardware: Hardware;

  constructor() { }

  ngOnInit(): void {
  }

}
