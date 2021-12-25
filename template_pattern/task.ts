import { Audit,RecordArgs } from "./audit-trail";

export abstract class Task<T={}, R=void> {
    protected auditTrail: Audit;

    constructor(auditTrail: Audit) { 
        this.auditTrail = auditTrail;
    }

    execute(recordArgs: RecordArgs, args: T) { 
        this.auditTrail.record(recordArgs)
        return this.doExecute(args);
    }

    protected abstract doExecute(args: T): R;

}