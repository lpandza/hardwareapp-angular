import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HardwareRoutingModule } from './hardware-routing.module';
import { HardwareComponent } from './hardware/hardware.component';
import { HardwaredetailComponent } from './hardwaredetail/hardwaredetail.component';


@NgModule({
  declarations: [
    HardwareComponent,
    HardwaredetailComponent
  ],
  imports: [
    CommonModule,
    HardwareRoutingModule
  ]
})
export class HardwareModule { }
