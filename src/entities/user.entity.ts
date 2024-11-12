import {BeforeInsert, Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import * as bcrypt from "bcrypt";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    role: string;

    @Column()
    password: string;

    @Column()
    name: string;

    @Column()
    rate: number;

    @Column("int", { array: true} )
    favourites: number[];

    @Column({ nullable: true })
    refreshToken: string;

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }
}