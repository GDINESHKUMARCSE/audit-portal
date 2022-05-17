import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuditRequest} from "../../model/audit_request";
import {AuditService} from "../../service/audit.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projectName: string = '';
  ApplicationOwner: string = '';
  projectMangerName: string = '';
  showSpinner: boolean = false;
  auditType: string = '';

  constructor(private router: Router, private auditService: AuditService) { }

  ngOnInit(): void {
  }

  submitDetails() {
    const auditRequest: AuditRequest = {
      projectName: this.projectName,
      ownerName: this.ApplicationOwner,
      managerName: this.projectMangerName,
      auditDetails: {
        auditType: this.auditType,
        questionYesCount: 0,
        questionNoCount: 0,
        auditDate: new Date()
      }
    }

      this.auditService.auditRequest = auditRequest;
      this.router.navigate(['questions'], { queryParams: { auditType: this.auditType }});


  }
}
