import { IsEmail, MinLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UserRole } from "../enum/user-role.enum";
import { UserStatus } from "../enum/user-status.enum";

@Entity({name: "User"})
export class User {
    @PrimaryGeneratedColumn({})
    id: number;

    @IsEmail({})
    @Column({})
    email: string;

    @MinLength(8)
    @Column({})
    password: string;

    @Column({})
    date_created: Date;

    @Column({})
    status: UserStatus;

    @Column({})
    role: UserRole;
}
