import {Question} from "./question";

export interface AuditDetails {
  auditType: string;
  auditDate: Date;
  questionYesCount: number;
  questionNoCount: number;
}
