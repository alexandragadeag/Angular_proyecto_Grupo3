import { Budget } from "./budget.model";
import { User } from "./user.model";

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
    user?: User;
    budget?: Budget;


}