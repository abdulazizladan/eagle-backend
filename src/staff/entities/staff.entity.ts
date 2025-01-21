import { AfterInsert, BeforeInsert, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { Contact } from "./contact.entity";
import { MedicalInfo } from "./medicalInfo.entity";
import { Credential } from "./credential.entity";
import { EmploymentRecord } from "./employment-Record.entity";
import { Promotion } from "./promotion.entity";

@Entity({})
export class Staff {
    @PrimaryColumn({unique: true, nullable: false})
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

    @OneToOne((type) => Contact, {cascade: true}) 
    @JoinColumn()
    contact: Contact;

    @OneToOne((type) => MedicalInfo, {cascade: true})
    @JoinColumn()
    medicalInfo: MedicalInfo;

    @OneToMany((type) => Promotion, (promotion) => promotion.staff, {cascade: true})
    promotions: Promotion[];

    @OneToMany((type) => EmploymentRecord, (employmentRecord) => employmentRecord.staff, {cascade: true})
    employmentHistory: EmploymentRecord[];

    @OneToMany(() => Credential, credential => credential.staff, {nullable: true})
    credentials: Credential[];

    @AfterInsert()
    async afterInsert() {
        if(!this.contact) {
            this.contact = new Contact();
        }
    }
}
