import { Budget } from "src/budget/budget.model";
import { User } from "src/user/user.model";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Contract {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    duration: number;

    @Column()
    discount: number;

    @Column()
    startDate: Date;

    @Column()
    endDate: Date;

    @Column()
    bankAccountNumber: number;

    @Column()
    paymentFrequency: number; //Cada cuantos meses se cobra

    @Column()
    active: boolean;

// asociaciones
user: User; // Many To One
budget: Budget;// Many To One


}