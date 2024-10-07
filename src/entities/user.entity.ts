import {Column, Entity, PrimaryGeneratedColumn, TableForeignKey} from "typeorm";

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