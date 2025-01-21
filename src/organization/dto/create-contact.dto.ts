import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsUrl } from "class-validator";

export class CreateContactDto {
    @ApiProperty({default: 1})
    id: number;

    @ApiProperty({})
    phone: number;

    @IsEmail({})
    @ApiProperty({})
    email: string;

    @IsUrl({})
    @ApiProperty({})
    website: string;

    @ApiProperty({})
    address: string;

    @ApiProperty({})
    lga: string;

    @ApiProperty({})
    state: string;

    @ApiProperty({})
    country: string;
}