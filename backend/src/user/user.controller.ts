import { Controller, Get, Param, Body, Post, ConflictException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.model';
import { Register } from './register.dto';
import { Role } from './role.enums';
import { Login } from './login.dto';
import { JwtService } from '@nestjs/jwt';
@Controller('user')
export class UserController {

    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        private jwtService: JwtService
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

    @Post('login')
    async login(@Body() login: Login) {
        const exists = await this.userRepository.existsBy({
            customer_email: login.email
          
        });

        
        const user = await this.userRepository.findOne({
            where: {
                customer_email: login.email,
          
            }
        });
        if (!exists) {
            throw new ConflictException('Usuario no encontrado');
        }

        if (login.password !== user.password) {
            throw new ConflictException('Contraseña incorrecta');
        }
    

    let userData = {
        sub: user.id,
        email: user.customer_email,
        role: user.role
    };

    let token = {
        token: await this.jwtService.signAsync(userData)
    }
    return token;
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

