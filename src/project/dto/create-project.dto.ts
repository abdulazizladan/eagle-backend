import { ApiProperty } from "@nestjs/swagger";

export class CreateProjectDto {
    @ApiProperty({})
    id: string;

    @ApiProperty({})
    title: string;

    @ApiProperty({})
    description: string;

    @ApiProperty({default: Date.now()})
    dateCreated: Date;
}
