import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.model';
import { Repository } from 'typeorm';

@Controller('users')
export class UserController {

    constructor(
        @InjectRepository(User) private userRepo: Repository<User>
    ){}

    @Get()
    findAll(): Promise<User[]> {
        
        return this.userRepo.find();
    }

    @Get(':id')
    findById( @Param('id', ParseIntPipe) id: number ) {
        
        return this.userRepo.findOne({
            where: {
                id: id
            }
        });
    }
    
}

