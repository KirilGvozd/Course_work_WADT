import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('basket')
export class Basket {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;
}