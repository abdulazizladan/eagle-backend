import { ApiProperty } from "@nestjs/swagger";

export class CreateVendorContactDto {
    @ApiProperty({})
    website: string;

    @ApiProperty({})
    email: string;

    @ApiProperty({})
    phone: number;
}