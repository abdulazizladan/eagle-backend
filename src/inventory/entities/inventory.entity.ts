import { Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Item } from "./item.entity";

@Entity()
export class Inventory {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany((type) => Item, item => item.inventory)
    items: Item[];
}
