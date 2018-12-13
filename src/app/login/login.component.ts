import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ServerService } from "../shared/server.service";
import { Router } from "@angular/router";
import { AuthService } from "../shared/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private _loginService: ServerService, private _router: Router, private _authUser: AuthService) { }

  ngOnInit() {
    // check if user is already logged in

    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  onlogin(): void {
    this._loginService.loginService(this.loginForm.value).subscribe(
      res => {
        // console.log(res);
        // console.log(res.headers.get('x-auth'));

        localStorage.setItem('token', res.headers.get('x-auth'));

        if (res['status'] == 200) {
          const body = res.body
          this._authUser.login(body['_id'], body['username'], body['role'].toLowerCase());

          if (body['role'].toLowerCase() == 'teacher') {
            this._router.navigate(['/teacher']);
          } else if (body['role'].toLowerCase() == 'student') {
            this._router.navigate(['/student']);
          }
        }
      },
      err => alert(`${err.statusText} : your request cannot be processed !!`)
    );
  }
}

// resopnse object
// role: "teacher"
// username: "amir"
// _id: "5c0ea3507a6e7a449756a44e"
