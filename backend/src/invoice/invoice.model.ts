import { Contract } from "src/contract/contract.model";
import { User } from "src/user/user.model";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Invoice {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    price: number;

    @CreateDateColumn()
    emitDate: Date;

    @Column({nullable: true})
    startDate: Date;

    @Column({nullable: true})
    endDate: Date;

    @Column({nullable: true})
    totalPrice: number;

    @Column({nullable: true})
    active: boolean;


    @ManyToOne(() => Contract, {eager:true})
    contract: Contract;

//     @ManyToOne(() => User, {eager: true})
// user: User;

 

   

}