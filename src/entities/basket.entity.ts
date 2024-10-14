import {Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./user.entity";

@Entity('basket')
export class Basket {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;
}