import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user";
import {UserRecord} from "../model/user_record";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(user: User) {
    return this.http.post<UserRecord>('http://localhost:8083/login', user);
  }
}
