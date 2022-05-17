import {AuditDetails} from "./audit_details";

export interface AuditRequest {
  ownerName: string;
  managerName: string;
  projectName: string;
  auditDetails: AuditDetails;
}
