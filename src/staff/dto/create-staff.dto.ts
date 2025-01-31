import { ApiProperty } from "@nestjs/swagger";
import { MedicalInfo } from "../entities/medicalInfo.entity";
import { Promotion } from "../entities/promotion.entity";
import { EmploymentRecord } from "../entities/employment-Record.entity";
import { Credential } from "../entities/credential.entity";
import { CreateContactDto } from "./create-contact.dto";
import { CreateMedicalInfoDto } from "./create-medica-info.dto";
import { CreatePromotionDto } from "./create-promotion.dto";
import { StaffStatus } from "../enum/staff-status.enum";
import { IsArray, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

export class CreateStaffDto {
    @ApiProperty({})
    id: string;

    @ApiProperty({})
    firstName: string;

    @ApiProperty({})
    middleName: string;

    @ApiProperty({})
    lastName: string;

    @ApiProperty({})
    dateOfBirth: Date;

    @ApiProperty({})
    gender: string;

    @ApiProperty({})
    contact: CreateContactDto;

    @ApiProperty({})
    medicalInfo: CreateMedicalInfoDto;

    @ApiProperty({
        type: 'array',
        items: {
            type: 'object',
            properties: {
                date: {type: 'number'}
            }
        } 
    })
    promotions: CreatePromotionDto[];

    @ApiProperty({isArray: true})
    employmentHistory: EmploymentRecord[];

    @ApiProperty({isArray: true})

    @ValidateNested({each: true})
    @IsArray({})
    @Type(() => Credential)
    credentials: Credential[];

    @ApiProperty({})
    status: StaffStatus;

}
