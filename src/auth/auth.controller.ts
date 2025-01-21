import { Body, Controller, Post } from '@nestjs/common';
import { UserLoginDto } from './dto/user-login.dto';
import { ApiFoundResponse, ApiOperation } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@Controller({path: 'auth', version: '1.0', durable: true})
export class AuthController {

    constructor(private readonly authService: AuthService) {
    }
    
    @ApiOperation({summary: "user login", description: 'enter user email and password'})
    @Post('login')
    login(@Body() loginCredentials: UserLoginDto) {

    }

    @ApiOperation({summary: "user password reset"})
    @Post('reset-password')
    resetPassword() {

    }
}
