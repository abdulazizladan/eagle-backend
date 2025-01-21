import { ApiProperty } from "@nestjs/swagger";
import { CreateContactDto } from "./create-contact.dto";
import { IsDate } from "class-validator";

export class CreateOrganizationDto {
    @ApiProperty({type: 'number', default: 1})
    id: number;

    @ApiProperty({type: 'string'})
    name: string;

    @ApiProperty({type: 'string'})
    logo: string;

    @ApiProperty({type: 'string'})
    mission: string;

    @ApiProperty({type: 'string'})
    vision: string;

    @IsDate({})
    @ApiProperty({default: Date.now(), })
    dateEstablished: Date;

    @ApiProperty({})
    contact: CreateContactDto;
}
