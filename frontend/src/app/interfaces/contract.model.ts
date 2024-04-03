import { Budget } from "./budget.model";


export interface Contract {
    id: number;

    duration: string;
    discount: number;
    startDate: Date;
    endDate: Date;
    bankAccountNumber: string;
    paymentFrequency: number; // Cada cuantos meses se cobra
    active: boolean;
    
    // asociaciones

    budget: Budget;// Many To One
}