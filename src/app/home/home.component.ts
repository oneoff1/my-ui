import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService, AuthService } from '../services/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private authSrv: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.authSrv.logout();
    this.router.navigate(['login']);
  }

  parseJwt() {
    this.authSrv.isExpired();
  }

}
