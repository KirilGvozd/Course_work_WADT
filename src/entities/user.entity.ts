import {Column, Entity, OneToMany, PrimaryGeneratedColumn, TableForeignKey} from "typeorm";
import {Basket} from "./basket.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column()
    role: string

    @Column()
    password: string

    @Column()
    name: string

    @Column()
    rate: number

    @Column("int", { array: true} )
    favourites: number[]
}