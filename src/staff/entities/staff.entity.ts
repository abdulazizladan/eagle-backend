import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Contact } from "./contact.entity";

@Entity({})
export class Staff {
    @PrimaryColumn({unique: true})
    id: string;

    @Column({})
    firstName: string;

    @Column({})
    middleName: string;

    @Column({})
    lastName: string;

    @Column({})
    dateOfBirth: Date;

    @Column({})
    gender: string;

    @OneToOne(() => Contact, (contact) => contact.staff, { cascade: true }) 
    @JoinColumn({name: 'contactId'})
    contact: Contact;
}
