import { 
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Request,
    UseGuards 
} from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { UserLoginDto } from './dto/user-login.dto';
import { ApiFoundResponse, ApiOperation } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@Controller({path: 'auth', version: '1.0', durable: true})
export class AuthController {

    constructor(private readonly authService: AuthService) {
    }
    
    @HttpCode(HttpStatus.OK)
    @ApiOperation({summary: "user login", description: 'enter user email and password'})
    @Post('login')
    login(@Body() loginCredentials: UserLoginDto) {
        return this.authService.login(loginCredentials)
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req){
        return req.user
    }

    @ApiOperation({summary: "user password reset"})
    @Post('reset-password')
    resetPassword() {

    }
}
