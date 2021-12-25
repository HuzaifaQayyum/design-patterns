import { Task } from "./task";

export class TransferMoney extends Task<{}, boolean> { 

    protected doExecute() { 
        console.log("Transferring money...");
        return true;
    }
    
} 