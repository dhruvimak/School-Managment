import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from './auth.service';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class TeacherAuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router, private _location:Location) { }

  canActivate() {
    console.log("teacher "+this._authService.getUserRole());
    
    if (this._authService.isUserLoggedIn()) {
      if (this._authService.getUserRole() === "teacher")
        return true;
      else {
        this._router.navigate(['/404']);
        return false;
      }
    }
    this._router.navigate(['/login']);
    return false;
  }
}