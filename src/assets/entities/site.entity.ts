import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Building } from "./building.entity";
import { AssetsRegistry } from "./assets-registry.entity";

@Entity({name: 'Site'})
export class Site {
    @PrimaryColumn({nullable: false, unique: true})
    id: string;

    @Column({nullable: false})
    name: string;

    @Column({nullable: true})
    code: string;

    @OneToMany((type) => Building, (building) => building.site, {cascade: true})
    buildings: Building[];

    @ManyToOne((type) => AssetsRegistry, (assets) => assets.sites)
    assets: AssetsRegistry;
}