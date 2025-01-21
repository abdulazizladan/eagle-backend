import { ApiProperty } from "@nestjs/swagger";

export class CreateContactDto {
    @ApiProperty({})
    phone;

    @ApiProperty({})
    state;

    @ApiProperty({})
    lga;

    @ApiProperty({})
    streetAddress;
}