import { Component, OnInit } from '@angular/core';
import {AuditService} from "../../service/audit.service";

@Component({
  selector: 'app-audit-status',
  templateUrl: './audit-status.component.html',
  styleUrls: ['./audit-status.component.css']
})
export class AuditStatusComponent implements OnInit {

  auditResponse: any;
  displayedColumns: string[] = ['Project Name', 'Manager Name', 'Owner Name', 'Audit Type', 'Execution Status', 'Remedial Action'];

  constructor(private auditService: AuditService) {
    this.auditResponse = [this.auditService.auditResponse];
  }

  ngOnInit(): void {
  }

}
