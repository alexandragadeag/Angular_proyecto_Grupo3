import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "./role.enums";


@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @Column({nullable: true}) // opcional
    phone: string;

    @Column({nullable: true}) // opcional
    addressStreet: string;
    // addressPostalCode
    // addressCity
    // addressCountry

    @Column({
        type: 'enum',
        enum: Role,
        default: Role.USER
    })
    role: Role;

}


    




