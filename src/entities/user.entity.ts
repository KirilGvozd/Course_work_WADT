import {Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Item} from "./item.entity";

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