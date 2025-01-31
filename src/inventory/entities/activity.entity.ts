import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { ActivityType } from "../enum/activity.enum";
import { Item } from "./item.entity";

@Entity({name: 'Activity'})
export class Activity {
    @PrimaryColumn({})
    id: number;

    @Column({})
    type: ActivityType;

    @Column({})
    date: Date;

    @ManyToOne((type) => Item, item => item.actiities)
    item: Item;
}