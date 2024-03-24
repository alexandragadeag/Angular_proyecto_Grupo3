import { ConflictException, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe } from '@nestjs/common';
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
