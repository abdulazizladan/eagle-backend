import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";
import { Milestone } from "./milestone.entity";

@Entity({})
export class Project {
    @PrimaryColumn({unique: true, nullable: false})
    id: string;

    @Column({nullable: false})
    title: string;

    @Column({nullable: false})
    description: string;

    @Column({default: Date.now()})
    dateCreated: Date;

    @OneToMany((type) => Milestone, milestone => milestone.project)
    @JoinColumn({})
    milestones: Milestone[];
}
