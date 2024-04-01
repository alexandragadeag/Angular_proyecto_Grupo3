import { Budget } from "src/budget/budget.model";
import { Product } from "src/product/product.model";
import { User } from "src/user/user.model";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Contract {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    duration: string;

    @Column()
    discount: number;

    @Column({type: 'date', nullable:true}) // sin hora minutos
    startDate: Date;

    @Column({type: 'date', nullable:true}) // sin hora minutos
    endDate: Date;

    @Column()
    bankAccountNumber: string;

    @Column()
    paymentFrequency: number; //Cada cuantos meses se cobra

    @Column()
    active: boolean;

// asociaciones
user: User; // Many To One
budget: Budget;// Many To One
// opcional
//product: Product; // Many To One


}