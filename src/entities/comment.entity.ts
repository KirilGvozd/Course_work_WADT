import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @Column()
    itemId: number;

    @Column("text", { array: true} )
    attachments: string[];

    @Column()
    date: string;

    @Column()
    text: string;
}