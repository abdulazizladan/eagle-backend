import { Column, Entity, OneToOne, PrimaryColumn } from "typeorm";
import { Organization } from "./organization.entity";

@Entity({name: 'OrganizationContact'})
export class Contact {
    @PrimaryColumn({})
    id: number;

    @Column({})
    phone: number;

    @Column({})
    email: string;

    @Column({})
    website: string;

    @Column({})
    address: string;
    
    @Column({})
    lga: string;
    
    @Column({})
    state: string;

    @Column({})
    country: string;
    
    @OneToOne((type) => Organization, (organization) => organization.contact)
    organization: Organization;
}