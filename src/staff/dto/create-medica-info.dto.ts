import { ApiProperty } from "@nestjs/swagger";

export class CreateMedicalInfoDto {
    @ApiProperty({readOnly: true})
    id: string;

    @ApiProperty()
    bloodGroup: string;

    @ApiProperty()
    genotype: string; 
}