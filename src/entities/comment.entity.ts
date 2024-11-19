import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./user.entity";
import {Item} from "./item.entity";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({name: 'userId'})
    user: User;

    @Column()
    sellerId: number;

    @ManyToOne(() => Item, (item) => item.id)
    @JoinColumn({name: 'sellerId'})
    seller: User;

    @Column("text", { array: true} )
    attachments: string[];

    @Column()
    date: string;

    @Column()
    text: string;
}