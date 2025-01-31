import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Contact } from "./contact.entity";

@Entity({name: 'Vendor'})
export class Vendor {
    @PrimaryGeneratedColumn({})
    id: number;

    @Column({})
    name: string;

    @Column({nullable: true})
    primaryService: string;

    @OneToOne((type) => Contact, {cascade: true})
    @JoinColumn()
    contact: Contact;

}
