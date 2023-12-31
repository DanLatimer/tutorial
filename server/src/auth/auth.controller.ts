import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { User } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
    public constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    public signIn(@Body() signInDto: SignInDTO) {
        return this.authService.signIn(signInDto.username, signInDto.password);
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req: {user: User}) {
      return req.user;
    }
}

export interface SignInDTO {
    username: string
    password: string
}