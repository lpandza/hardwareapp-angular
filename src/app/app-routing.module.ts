import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoggedInGuard} from "./auth/guard/logged-in.guard";
import {PageNotFoundComponent} from "./auth/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: 'hardware',
    loadChildren: () => import('./hardware/hardware.module').then(h => h.HardwareModule),
    canActivate: [LoggedInGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
