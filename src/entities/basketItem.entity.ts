import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('basketItem')
export class BasketItem {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    itemId: number;

    @Column()
    basketId: number;
}