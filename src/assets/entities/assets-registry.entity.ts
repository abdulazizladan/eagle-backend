import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Site } from "./site.entity";
import { Machine } from "./machine.entity";
import { Vehicle } from "./vehicle.entity";
import { Appliance } from "./appliance.entity";

@Entity({name: 'AssetsRegistry'})
export class AssetsRegistry {
    @PrimaryColumn({unique: true, nullable: false})
    id: string;

    @Column({})
    name: string;

    @OneToMany((type) => Site, (site) => site.assets, {cascade: true})
    sites: Site[]

    @OneToMany((type) => Machine, (machine) => machine.assets)
    machines: Machine[];

    @OneToMany((type) => Vehicle, (vehicle) => vehicle.assets)
    vehicles: Vehicle[];

    @OneToMany((type) => Appliance, (appliance) => appliance.assets)
    appliances: Appliance[]; 
}
