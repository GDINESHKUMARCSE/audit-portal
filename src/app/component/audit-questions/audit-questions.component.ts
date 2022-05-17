import { Component, OnInit } from '@angular/core';
import {Question} from "../../model/question";
import {AuditService} from "../../service/audit.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-audit-questions',
  templateUrl: './audit-questions.component.html',
  styleUrls: ['./audit-questions.component.css']
})
export class AuditQuestionsComponent implements OnInit {

  questions: Question[] = [];
  auditType: string = '';
  constructor(private auditService: AuditService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.auditType = params['auditType'];
      auditService.getAuditQuestions(this.auditType).subscribe((question) => {
        console.log(question);
        this.questions = question;
      });
    })
  }

  ngOnInit(): void {
  }

  submitQuestions() {
    this.auditService.auditRequest.auditDetails.questionYesCount = this.questions.reduce((count,ans) => ans.response === "Yes"? count+1:count, 0);
    this.auditService.auditRequest.auditDetails.questionNoCount = this.questions.reduce((count,ans) => ans.response === "No"? count+1:count, 0);
    this.auditService.getProjectExecutionStatus().subscribe(data => {
      this.auditService.auditResponse = data;
      this.router.navigate(['audit-status']);
      console.log(data);
    });
  }
}
