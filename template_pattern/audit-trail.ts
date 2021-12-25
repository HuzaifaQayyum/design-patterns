export type RecordArgs = { type: string, log: boolean };

export interface Audit {  
    record(recordArgs: RecordArgs): void;   
}

export class AuditTrailReport implements Audit { 
    
    record({ type, log }: RecordArgs): void {
        console.log("Recording... \nType: ", type, "\nLogging: ", log);
    }
    
}