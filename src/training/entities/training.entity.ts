import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'Training'})
export class Training {
    @PrimaryGeneratedColumn({})
    id: number;

    @Column({})
    title: string;

    @Column({})
    description: string;

    @Column({})
    dateStarted: Date;

    @Column({})
    duration: number;

    @Column({})
    dateCompleted: Date;
}
