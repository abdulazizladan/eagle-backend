import { ApiProperty } from "@nestjs/swagger";

export class CreatePromotionDto {
    @ApiProperty({})
    id: string;
    
    @ApiProperty({})
    date: Date;

    @ApiProperty({})
    newPosition: string;

    @ApiProperty({})
    department: string;
}