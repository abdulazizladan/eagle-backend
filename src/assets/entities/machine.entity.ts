import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { AssetsRegistry } from "./assets-registry.entity";

@Entity({name: 'machine'})
export class Machine {
    @PrimaryColumn({})
    id: string;

    @Column({})
    manufacturer: string;

    @Column({})
    model: string;

    @Column({})
    description: string;

    @Column({})
    image: string;

    @ManyToOne((type) => AssetsRegistry, (assets) => assets.machines)
    assets: AssetsRegistry
}