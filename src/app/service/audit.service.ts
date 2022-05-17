import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Question} from "../model/question";
import {AuditRequest} from "../model/audit_request";

@Injectable({
  providedIn: 'root'
})
export class AuditService {

  public auditRequest: any;
  public auditResponse: any;
  constructor(private http: HttpClient) {
  }

  getAuditQuestions(auditType: string) {
    const token = sessionStorage.getItem('token');
    let headers;
    if (token) {
      headers = new HttpHeaders()
        .set('Authorization', 'Bearer ' + token);
    }
    return this.http.get<Question[]>('http://localhost:8081/AuditCheckListQuestions/' + auditType, {headers: headers});
  }

  getProjectExecutionStatus() {
    const token = sessionStorage.getItem('token');
    let headers;
    if (token) {
      headers = new HttpHeaders()
        .set('Authorization', 'Bearer ' + token);
    }
    return this.http.post('http://localhost:8080/ProjectExecutionStatus', this.auditRequest, {headers: headers});
  }
}
