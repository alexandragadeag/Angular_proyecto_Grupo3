import { Entity, PrimaryGeneratedColumn } from "typeorm";
import { Column, CreateDateColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    customer_name: string;

    @Column()
    customer_email: string;

    @Column()
    password: string;

    @Column()
    customer_phone: string;

    @Column()
    nif_cif: string;

    @Column()
    installation_address: string;

    @Column()

    installation_city: string;

    @Column()
    postal_code: number;

    @CreateDateColumn()
    contract_date: Date;


    @Column()
    account_number: number;

    @Column()
    m2: number;

    @Column()
    members: number;

    @Column()
    electric_car: boolean;



    




}