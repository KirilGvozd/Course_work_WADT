import {Column, Entity, PrimaryGeneratedColumn, TableForeignKey} from "typeorm";

@Entity()
export class Item {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    typeId: number

    @Column("int", { array: true} )
    prices: number[]

    @Column("text", {array: true} )
    images: string[]

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    price: number
}