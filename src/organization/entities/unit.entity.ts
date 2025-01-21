import { Column, Entity, PrimaryColumn, ManyToOne } from "typeorm";
import { Organization } from "./organization.entity";

@Entity({name: 'OrganizationUnit'})
export class Unit {
    @PrimaryColumn({})
    name: string;

    @Column({})
    description: string;

    @ManyToOne((type) => Organization, (organization) => organization.units)
    organization: Organization;
}