import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Staff } from "./staff.entity";

@Entity({name: 'StaffContact'})
export class Contact {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable: true})
    phone: number;

    @Column({nullable: true})
    state: string;

    @Column({nullable: true})
    lga: string;

    @Column({nullable: true})
    streetAddress: string;

    @OneToOne((type) => Staff, (staff) => staff.contact)
    staff: Staff;
}