import { IsNumber } from "class-validator";
import { Entity, PrimaryColumn, Column, ManyToOne } from "typeorm";
import { AssetsRegistry } from "./assets-registry.entity";

@Entity({name: 'Appliance'})
export class Appliance {
    @PrimaryColumn({})
    id: string;

    
    @IsNumber({})
    @Column()
    pricePurchased: number;

    @Column({})
    name: string;

    @Column({nullable: true})
    description: string;
    
    @Column({})
    brand: string;

    @Column({})
    model: string;

    @Column({})
    color: string;

    @Column({})
    image: string;

    @ManyToOne((type) => AssetsRegistry, (assets) => assets.appliances)
    assets: AssetsRegistry;

}