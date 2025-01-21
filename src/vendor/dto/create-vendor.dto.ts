import { ApiProperty } from "@nestjs/swagger";
import { CreateVendorContactDto } from "./create-vendor-contact.dto";

export class CreateVendorDto {
    @ApiProperty({readOnly: true})
    id: number;
    
    @ApiProperty({})
    name: string;

    @ApiProperty({})
    contact: CreateVendorContactDto;
}
