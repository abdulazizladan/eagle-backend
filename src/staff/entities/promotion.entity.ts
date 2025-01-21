import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Staff } from "./staff.entity";

@Entity({})
export class Promotion {
    @PrimaryColumn({})
    id: string;

    @Column({})
    date: Date;

    @Column({})
    newPosition: string;

    @Column({})
    department: string;

    @ManyToOne((type) => Staff, (staff) => staff.promotions)
    staff: Staff;
}