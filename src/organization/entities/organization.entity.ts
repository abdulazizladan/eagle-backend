import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Contact } from "./contact.entity";
import { Unit } from "./unit.entity";

@Entity({name: 'Organization'})
export class Organization {

    @PrimaryColumn({default: 1})
    id: number;

    @Column()
    name: string;

    @Column({})
    logo: string;

    @Column({})
    mission: string;

    @Column({})
    vision: string;

    @Column({})
    dateEstablished: Date;

    @OneToOne((type) => Contact, {cascade: true})
    @JoinColumn({})
    contact: Contact;

    @OneToMany((type) => Unit, (unit) => unit.organization)
    units: Unit[]
}
