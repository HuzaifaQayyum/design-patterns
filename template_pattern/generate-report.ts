import { Task } from "./task";

type GenerateReportParams = { fileName: string };

export class GenerateReport extends Task<GenerateReportParams> {

    protected doExecute({ fileName }: GenerateReportParams) {
        console.log("generating report...");
        console.log("Saving to file...", fileName)
    }

}