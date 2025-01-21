import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Vendor } from "./vendor.entity";

@Entity({name: 'VendorContact'})
export class Contact {
    @PrimaryGeneratedColumn({})
    id: number;

    @Column({})
    website: string;

    @Column({})
    email: string;

    @Column({})
    phone: number;

    @OneToOne((type) => Vendor, (vendor) => vendor.contact)
    vendor: Vendor;
}