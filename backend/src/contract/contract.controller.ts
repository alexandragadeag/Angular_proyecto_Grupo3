import { Body, ConflictException, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { Contract } from './contract.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Controller('contract')
export class ContractController {
    constructor(
        @InjectRepository(Contract) private contractRepository: Repository<Contract>
    ) { }

    @Get()
    findAll() {
        return this.contractRepository.find(); // Equivalente al SELECT * FROM
    }

    @Get(':id') // :id es una variable, parámetro en la url
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

    @Post()
    create(@Body() contract: Contract) {
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
                throw new NotFoundException('Book not found');
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
