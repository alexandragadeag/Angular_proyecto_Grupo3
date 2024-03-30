import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true}) // nullable true hace que el campo sea opcional
    title: string;

    @Column({length: 3000, nullable: true})
    Description: string;


    @Column({nullable: true})
    price: number;

    @Column({nullable: true})
    photoUrl: string;

}