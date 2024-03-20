import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Budget {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    surname: string;

    @Column()
    phone: number;

    @Column()
    email: string;

    @Column()
    address: string;

    @Column()
    postCode: number;

    @Column()
    town: string;

    @Column()
    installation: string;

    @Column()
    descriptionAppliances: string;


}