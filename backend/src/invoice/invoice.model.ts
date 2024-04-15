import { Contract } from "src/contract/contract.model";
import { User } from "src/user/user.model";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Invoice {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    numberCode: string;

    @Column()
    price: number;

    @Column()
    startDate: Date;

    @Column()
    endDate: Date;

    @Column()
    totalPrice: number;

    @Column()
    active: boolean;


    @ManyToOne(() => Contract, {eager:true})
    contract: Contract;

    @ManyToOne(() => User, {eager: true})
user: User;

 

   

}