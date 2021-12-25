import { AuditTrailReport } from "./audit-trail";
import { GenerateReport } from "./generate-report";
import { TransferMoney } from "./transfer-money";

const auditTrailReport = new AuditTrailReport();
const generateReport = new GenerateReport(auditTrailReport);
const transferMoney = new TransferMoney(auditTrailReport);
generateReport.execute({ type: "Generate Report", log: true }, { fileName: "main.txt" });
transferMoney.execute({ type: "Transfer money", log: false }, {});