import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService, AuthService } from '../services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};

  constructor(
    private router: Router,
    private authSrv: AuthService,
    private alertService: AlertService) { }

  ngOnInit() {
    // reset login status
    this.authSrv.logout();
    this.model.username = 'super';
    this.model.password = 'easy';
  }

  login() {
    this.authSrv.login(this.model.username, this.model.password).subscribe(
      data => {
        if (data && data.v) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('id_token', data.v);
          this.router.navigate(['/']);
        } else {                       
          this.alertService.error(data.message);
        }
      },
      error => {
        if (error && error.json()) {
          if(error.message){
            this.alertService.error(error.message);
          }else{
            this.alertService.error("Server Error");
          }
        } else {
          this.alertService.error("Unknown Error");
        }
      }
    );
  }
}
