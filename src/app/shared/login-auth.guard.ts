import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { Location } from "@angular/common";

@Injectable()
export class LoginAuthGuard implements CanActivate {
  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _location: Location
  ) { }

  canActivate() {
    console.log("login"+this._authService.getUserRole());
    if (!this._authService.isUserLoggedIn()) {
      return true;
    } else {
      if (window.history.length > 0) {
        this._location.back();
      }
      return false;
    }
  }
}
