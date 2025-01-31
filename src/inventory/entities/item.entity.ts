import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Inventory } from "./inventory.entity";
import { Activity } from "./activity.entity";

@Entity({name: 'Item'})
export class Item {
    @PrimaryGeneratedColumn({unsigned: true})
    id: number;

    @Column({})
    name: string;

    @Column({})
    description: string;

    @Column({})
    currentQuantity: number;

    @Column({})
    unit: string;

    @Column({})
    price: number;

    @Column({})
    currency: string;

    @ManyToOne(() => Inventory, inventory => inventory.items)
    inventory: Inventory;

    @OneToMany((type) => Activity, activies => activies.item)
    actiities: Activity[];
}