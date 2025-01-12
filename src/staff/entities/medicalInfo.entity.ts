import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({})
export class MedicalInfo {
    @PrimaryColumn({})
    staffId: string;

    @Column({})
    bloodGroup: string;

    @Column({})
    genotype: string;
}