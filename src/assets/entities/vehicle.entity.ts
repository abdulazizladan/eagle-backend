import { IsNumber } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AssetsRegistry } from "./assets-registry.entity";

@Entity({name: 'Vehicle'})
export class Vehicle {
    @PrimaryGeneratedColumn({})
    id: number;

    @Column({})
    brand: string;

    @Column({})
    model: string;

    @Column({})
    color: string;

    @Column({})
    datePurchased: Date;

    @IsNumber({})
    @Column()
    pricePurchased: number;

    @ManyToOne((type) => AssetsRegistry, (assets) => assets.vehicles)
    assets: AssetsRegistry;

}