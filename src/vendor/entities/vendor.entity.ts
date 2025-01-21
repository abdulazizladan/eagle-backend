import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Contact } from "./contact.entity";

@Entity()
export class Vendor {
    @PrimaryGeneratedColumn({})
    id: number;

    @Column({})
    name: string;

    @OneToOne((type) => Contact, {cascade: true})
    @JoinColumn()
    contact: Contact;
}
