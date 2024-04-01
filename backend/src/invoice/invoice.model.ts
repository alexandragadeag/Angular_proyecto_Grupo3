import { Contract } from "src/contract/contract.model";
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
    emitDate: Date;

    @Column()
    startDate: Date;

    @Column()
    endDate: Date;


    @ManyToOne(() => Contract, {eager:true})
    contract: Contract;

    //cálculo kw/dia por 30 días
    @Column()
    consumption: number;

    @Column()
    totalPrice: number;

}