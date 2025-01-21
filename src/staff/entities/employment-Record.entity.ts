import { Staff } from "./staff.entity";
import { Entity, ManyToOne, PrimaryColumn } from "typeorm";

@Entity({})
export class EmploymentRecord {
    @PrimaryColumn({})
    id: string;

    startDate: Date;

    endDate: Date;

    position: string;

    department: string;

    company: string

    @ManyToOne(() => Staff, (staff) => staff.id)
    staff: Staff;
}