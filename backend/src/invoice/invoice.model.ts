import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


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

    @Column()
    contract: string;

    //cálculo kw/dia por 30 días

    @Column()
    totalPrice: number;

}