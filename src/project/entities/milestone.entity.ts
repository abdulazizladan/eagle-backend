import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Project } from "./project.entity";

@Entity({})
export class Milestone {
    @PrimaryGeneratedColumn({})
    id: string;

    @Column({nullable: false})
    title: string;
    
    @Column({nullable: false})
    description: string;

    @Column({default: null})
    dateCommenced: Date | null;

    @Column({default: null})
    dateCompleted: Date | null;

    @ManyToOne((type) => Project, project => project.milestones)
    project: Project;
}