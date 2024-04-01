import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.model';
@Controller('user')
export class UserController {

    constructor(
        @InjectRepository(User) private userRepository: Repository<User>
    ){}

    @Get()
    findAll() {
           return this.userRepository.find();
    }

    @Get(':id')
    findById( @Param('id', ParseIntPipe) id: number ) {
        
        return this.userRepository.findOne({
            where: {
                id: id
            }
        });
    }
    
}

