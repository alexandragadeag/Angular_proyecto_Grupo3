import { Body, ConflictException, Controller, NotFoundException, Post, UnauthorizedException } from '@nestjs/common';
import { Register } from './register.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.model';
import { Repository } from 'typeorm';

import { Login } from './login.dto';
import { JwtService } from '@nestjs/jwt';
import { Role } from './role.enums';

@Controller('user')
export class UserController {


    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        private jwtService: JwtService
    ) {}
    
    @Post('register')
    async register(@Body() register: Register) {
        
        const exists = await this.userRepository.existsBy({
            email: register.email
        });

        if(exists)
            throw new ConflictException("Email ocupado");

        // crear usuario en base de datos
        const user: User = {
            id: 0,
            email: register.email,
            password: register.password,
            phone: '',
            role: Role.USER
        };
        await this.userRepository.save(user);
    }

    @Post('login')
    async login(@Body() login: Login) {

        // comprobar si el email existe
        const exists = await this.userRepository.existsBy({
             email: login.email
        });
        if(!exists)
            throw new NotFoundException("Usuario no encontrado."); // 404
        // Recuperar el usuario
          const user = await this.userRepository.findOne({
              where: {
                email: login.email
              }
          });

        // Comparar contraseñas
        if (user.password !== login.password) {
             // si no coinciden lanzar UnauthorizedException
            throw new UnauthorizedException("Credenciales icorrectas"); // 401
        }
           

        // Crear y devolver token de acceso
        let userData = {
            sub: user.id,
            email: user.email,
            role: user.role
        };
        let token = {
            token: await this.jwtService.signAsync(userData)
        }
        return token;
    }
    
}
