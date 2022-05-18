import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Question} from "../model/question";
import {AuditRequest} from "../model/audit_request";
//import {environment} from "../../environments/environment";
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class AuditService {

  HostSeverity = environment.host;
  HostChecklist= environment.host1;
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
    return this.http.get<Question[]>('http://'+this.HostChecklist+'/AuditCheckListQuestions/' + auditType, {headers: headers});
  }

  getProjectExecutionStatus() {
    const token = sessionStorage.getItem('token');
    let headers;
    if (token) {
      headers = new HttpHeaders()
        .set('Authorization', 'Bearer ' + token);
    }
    return this.http.post('http://'+this.HostSeverity+'/ProjectExecutionStatus', this.auditRequest, {headers: headers});
  }
}
