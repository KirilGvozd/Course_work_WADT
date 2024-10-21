import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./user.entity";
import {Type} from "./type.entity";

@Entity()
export class Item {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    typeId: number

    @ManyToOne(() => Type, (type) => type.id)
    @JoinColumn({name: 'typeId'})
    type: Type;

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