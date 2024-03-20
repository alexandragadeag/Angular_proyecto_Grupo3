import { Budget } from "./budget.model";
import { User } from "./user.model";

export interface Contract {
    id: number;

    duration: number;
    discount: number;
    startDate: Date;
    endDate: Date;
    bankAccountNumber: number;
    paymentFrequency: number; // Cada cuantos meses se cobra
    active: boolean;
    
    // asociaciones
    user: User; // Many To One
    budget: Budget;// Many To One
}