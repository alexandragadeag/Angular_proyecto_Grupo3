import { Controller, Get, Param, Body, Post, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.model';
import { Register } from './register.dto';
import { Role } from './role.enums';
@Controller('user')
export class UserController {

    constructor(
        @InjectRepository(User) private userRepository: Repository<User>
    ){}

    @Post ('register')
    async register(@Body() register: Register) {
        const exists = await this.userRepository.existsBy({
            customer_email: register.email
        
        });
        if (exists) 
        throw new ConflictException('Email ocupado');

        const user: User = {
            id: 0,
            customer_email: register.email,
            password: register.password,
            customer_phone: '',
            role: Role.USER
        };
        await this.userRepository.save(user);
    } 
        
    @Get()
    findAll() {
           return this.userRepository.find();
    }

    @Get(':id')
    findById( @Param('id') id: number ) {
        
        return this.userRepository.findOne({
            where: {
                id: id
            }
        });
    }
    
}

