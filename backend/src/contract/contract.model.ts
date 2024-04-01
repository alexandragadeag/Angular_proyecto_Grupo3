import { Budget } from "src/budget/budget.model";
import { Product } from "src/product/product.model";
import { User } from "src/user/user.model";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


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

// opcional
//product: Product; // Many To One
@ManyToOne(() => User, {eager: true})
user: User;

@ManyToOne(() => Budget, {eager: true})
budget: Budget;

}