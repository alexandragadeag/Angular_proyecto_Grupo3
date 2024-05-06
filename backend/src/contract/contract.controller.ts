import { Body, ConflictException, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, Request, UseGuards } from '@nestjs/common';
import { Contract } from './contract.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from 'src/user/role.enums';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/user/user.model';

@Controller('contract')
export class ContractController {
    constructor(
        @InjectRepository(Contract) private contractRepository: Repository<Contract>,
        @InjectRepository(User) private userRepository: Repository<User>
    ) { }

    @Get()
    findAll() {
        return this.contractRepository.find(); // Equivalente al SELECT * FROM
    }

    @Get('filter-by-id/:id') // :id es una variable, parámetro en la url
    findById( @Param('id', ParseIntPipe) id: number ) {
        return this.contractRepository.findOne({
            // relations: {
            //    user: true
            // },
            where: {
                id: id
            }
        });
    }

     // http://localhost:3000/contract/filter-by-user/2
     @Get('filter-by-user-id/:id')
     findByUserId(@Param('id', ParseIntPipe) id: number){
         return this.contractRepository.find({
             where: {
                 user: {
                     id: id
                 }
             }
         });
     }

     // Este método es más seguro para obtener los contratos del usuario autenticado
     @UseGuards(AuthGuard('jwt'))
     @Get('filter-by-current-user')
     findByCurrentUserId(@Request() request) {
 
         if (request.user.role === Role.ADMIN) {
             return this.contractRepository.find();
         } else {
            console.log(request.user.id);
             return this.contractRepository.find({
                 where: {
                     user: {
                         id: request.user.id
                     }
                 }
             });
         }
 
     }   

    @Post()
    @UseGuards(AuthGuard('jwt'))
    async create(@Body() contract: Contract) {
        

        const user = await this.userRepository.findOne({
            where: {
                email: contract.budget.email
            }
        });
        if (user) {
            contract.user = user;
        }

        return this.contractRepository.save(contract);
    }

    // async viene de asíncrono, para poder ejecutar await
    @Put(':id')
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() contract: Contract
        ) {
            
            // await espera a que el método existsBy termine ya que devuelve Promise<boolean>
            const exists = await this.contractRepository.existsBy({
               id: id
            });

            if(!exists) {
                throw new NotFoundException('Contract not found');
            }

            return this.contractRepository.save(contract);

    }


    @Delete(':id')
    async deleteById(
        @Param('id', ParseIntPipe) id: number
    ) {

        const exists = await this.contractRepository.existsBy({
            id: id
        });

        if (!exists) {
            throw new NotFoundException('Contract not found');

        }

        try {
            //Opción:1 Borrar el contrato
            //Primero desasociar o borarr aquellas cosas que apunten al contrato
            //this.contractRepository.delete(id);
            //Opción:2 Desactivar el contrato
            const contract = await this.contractRepository.findOne({
                where: { id: id }
            });
            contract.active = false;
            await this.contractRepository.save(contract);
        } catch (error) {
            console.log("Error al borrar el contrato")
            throw new ConflictException('No se puede borrar.');

        }

    }

}
