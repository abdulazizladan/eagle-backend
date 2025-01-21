import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Staff } from "./staff.entity";

@Entity({})
export class Credential {
    @PrimaryColumn({nullable: false})
    id: string;

    @Column({})
    title: string;
    
    @Column({})
    institution: string;

    @Column({})
    yearIssued: number;

    @Column({nullable: true})
    verificationLink: string;

    @Column({nullable: true})
    image: string;

    @ManyToOne(() => Staff, staff => staff.credentials)
    staff: Staff;
}