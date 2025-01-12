import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Staff } from "./staff.entity";

@Entity({})
export class Contact {
    @PrimaryColumn({unique: true})
    contactId: string;

    @Column({})
    phone: number;

    @Column({})
    state: string;

    @Column({})
    lga: string;

    @Column({})
    streetAddress: string;

    @OneToOne(() => Staff, (staff) => staff.contact) 
    staff: Staff;
}