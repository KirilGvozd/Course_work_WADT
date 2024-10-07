import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('chat')
export class Chat {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    senderId: number;

    @Column()
    receiverId: number;

    @Column()
    messageText: string;

    @Column()
    messageDate: string;
}