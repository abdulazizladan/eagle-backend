import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { AssetsRegistry } from "./assets-registry.entity";
import { Site } from "./site.entity";

@Entity({name: 'Building'})
export class Building {
    @PrimaryColumn({nullable: false, unique: true})
    id: string;

    @Column({})
    title: string;

    @Column({nullable: true})
    code: string;

    @Column({})
    description: string;

    image: string;

    @Column({})
    dateCommissioned: Date;

    @ManyToOne((type) => Site, (site) => site.buildings)
    site: Site;
}