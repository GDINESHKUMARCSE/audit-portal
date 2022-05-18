import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user";
import {UserRecord} from "../model/user_record";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  HostLogin = environment.host2;
  constructor(private http: HttpClient) {
  }

  login(user: User) {
    return this.http.post<UserRecord>('http://'+this.HostLogin+'/login', user);
  }
}
