import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'Building'})
export class Building {
    @PrimaryGeneratedColumn({})
    id: number;

    @Column({})
    name: string;

    @Column({})
    description: string;
}