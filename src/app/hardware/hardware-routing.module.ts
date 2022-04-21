import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HardwareComponent} from "./hardware/hardware.component";
import {HardwaredetailComponent} from "./hardwaredetail/hardwaredetail.component";

const routes: Routes = [
  {path: '', component: HardwareComponent},
  {path: ':id', component: HardwaredetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HardwareRoutingModule { }
