import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./user.entity";

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

    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({name: 'senderId'})
    sender: User;

    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({name: 'receiverId'})
    receiver: User;
}