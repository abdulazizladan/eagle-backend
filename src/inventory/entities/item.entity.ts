import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Inventory } from "./inventory.entity";

@Entity()
export class Item {
    @PrimaryGeneratedColumn({unsigned: true})
    id: number;

    @Column({})
    name: string;

    @Column({})
    description: string;

    @Column({})
    unit: string;

    @Column({})
    price: number;

    @Column({})
    currency: string;

    @ManyToOne(() => Inventory, inventory => inventory.items)
    inventory: Inventory;
}