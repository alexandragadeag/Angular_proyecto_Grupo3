import { Controller, Get } from '@nestjs/common';
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
}
