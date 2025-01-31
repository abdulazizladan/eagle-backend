import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Staff } from "./staff.entity";

@Entity({name: 'MedicalInfo'})
export class MedicalInfo {
    @PrimaryGeneratedColumn({})
    id: string;

    @Column({})
    bloodGroup: string;

    @Column({})
    genotype: string;

    @OneToOne((type) => Staff, (staff) => staff.medicalInfo)
    staff: Staff
}