import { Column, Entity, PrimaryColumn } from "typeorm";
import { TaskCompletionStatus } from "../enum/staff-task-status.enum";

@Entity({name: 'IndividualTask'})
export class Task {
    @PrimaryColumn({})
    id: number;

    @Column({})
    staffID: string;

    @Column({})
    title: string;

    @Column({})
    description: string;

    @Column({default: Date.now()})
    dateCreated: Date;

    @Column({})
    expectedDateOfCompletion: Date;

    @Column({nullable: true, type: 'date', })
    dateCompleted: Date;

    @Column({nullable: true, default: null})
    completionStatus: TaskCompletionStatus;

    @Column({nullable: true, default: null})
    completionRemark: string;
}