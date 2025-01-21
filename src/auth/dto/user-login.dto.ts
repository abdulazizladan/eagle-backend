import { ApiProperty } from "@nestjs/swagger";

export class UserLoginDto {
    @ApiProperty({example: '***@***.***'})
    email: string;

    @ApiProperty({example: '********'})
    password: string;
}