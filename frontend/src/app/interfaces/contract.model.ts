import { Plan } from "./plan.model";
import { User } from "./user.model";

export interface Contract {
    id: number;

    duration: number;
    discount: number;
    startDate: Date;
    endDate: Date;
    bankAccountNumber: string;
    paymentFrequency: number; // Cada cuantos meses se cobra
    active: boolean;
    
    // asociaciones
    user: User; // Many To One
    plan: Plan;// Many To One
}