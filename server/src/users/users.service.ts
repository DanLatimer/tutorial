import { Injectable } from '@nestjs/common';

export interface User {
    userId: number
    username: string
    password: string
}

@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId: 1,
            username: 'danlatimer',
            password: 'test-password'
        }
    ]

    public async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}
