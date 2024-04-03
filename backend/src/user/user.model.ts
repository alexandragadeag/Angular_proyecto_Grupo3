import { Entity, PrimaryGeneratedColumn } from "typeorm";
import { Column, CreateDateColumn } from "typeorm";
import { Role } from "./role.enums";

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

    @Column({nullable: true})
    customer_phone: string;

    @Column()
    nif_cif: string;

    @Column()
    installation_address: string;

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

    @Column({
        type: 'enum',
        enum: Role,
        default: Role.USER
    })
    role: Role;
}




    




