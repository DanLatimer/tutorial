import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    public constructor(private usersService: UsersService, private jwtService: JwtService) {}

    public async signIn(username: string, password: string): Promise<unknown> {
        const user = await this.usersService.findOne(username)
        if (user?.password !== password) {
            throw new UnauthorizedException();
        }

        const payload = { sub: user.userId, username: user.username };
        return {
            access_token: await this.jwtService.signAsync(payload)
        }
    }
}
