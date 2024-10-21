import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Item} from "./item.entity";
import {Basket} from "./basket.entity";

@Entity('basketItem')
export class BasketItem {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    itemId: number;

    @Column()
    basketId: number;

    @Column()
    quantity: number

    @ManyToOne(() => Item, (item) => item.id)
    @JoinColumn({name: 'itemId'})
    item: Item;

    @ManyToOne(() => Basket, (basket) => basket.id)
    @JoinColumn({name: 'basketId'})
    basket: Basket;
}