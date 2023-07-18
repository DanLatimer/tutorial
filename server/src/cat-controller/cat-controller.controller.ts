import { Controller, Get, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('cat-controller')
export class CatControllerController {
    @UseGuards(AuthGuard)
    @Get()
    public findAll() {
        // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);

        return [
            'bryan',
            'titan',
            'cuddles'
        ]
    }
}
