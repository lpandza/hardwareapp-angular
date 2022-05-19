import { Component } from '@angular/core';
import {AuthService} from "./auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hardwareapp';

  constructor(
    public authenticationService: AuthService,
    private router: Router
  ) {
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']).then();
  }
}
