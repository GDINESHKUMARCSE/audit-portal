import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  showSpinner: boolean = false;

  constructor(private router: Router, private authService: AuthService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  login() {
    this.showSpinner = true;
    this.authService.login({userName: this.username, userPassword: this.password}).subscribe(res => {
      sessionStorage.setItem('token', res.token);
      this.router.navigate(['home']);
    }, error => {
      this._snackBar.open("Invalid UserName or Password", "Retry", {
        duration: 2000
      })
      this.showSpinner = false;
    });
  }

}
