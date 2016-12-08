import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import './rxjs-operators';
import { JwtHelper } from 'angular2-jwt';

import { AlertService } from './alert.service';


@Injectable()
export class AuthService {

            constructor(
                private http: Http,
                private jwtHelper: JwtHelper,
                private alertService: AlertService
                ) { }

            login(username: string, password: string) {
                let headers = new Headers({ 'Content-Type': 'application/json' });
                let options = new RequestOptions({ headers: headers });

                return this.http.post('http://localhost:8010/token', JSON.stringify({ u: username, p: password }), options).map(res => res.json(), err => err);
            }

            logout() {
                        // remove user from local storage to log user out
                        localStorage.removeItem('jwtToken');
            }

        isExpired() {
                try {
                        var token = localStorage.getItem('id_token');
                        var expired = this.jwtHelper.isTokenExpired(token);
                        if(expired){
                                this.alertService.error('Your session had been expired. Please login with your credentials again.');
                                return true;
                        }
                } catch (error) {
                        console.log(error);
                        return true;
                }

        }
}