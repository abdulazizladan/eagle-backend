import { Body, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { UserLoginDto } from './dto/user-login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ){}

    async login(@Body() loginDto: UserLoginDto): Promise<{access_token: string}> {
        const user = await this.userService.findByEmail(loginDto.email);
        if(user?.data.password !== loginDto.password) {
            throw new UnauthorizedException();
        }
        const payload = { loginDto };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
        //const {data?.password , ...result} = user

        //return result;
    }

    resetPassword() {

    }
}
