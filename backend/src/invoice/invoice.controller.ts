import { Controller, Get, Param } from '@nestjs/common';
import { Invoice } from './invoice.model';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Post, Body } from '@nestjs/common';

@Controller('invoice')
export class InvoiceController {
    
    @Post()
    create(@Body() invoice: Invoice) {
        return this.invoiceRepository.save(invoice);
    }
    constructor(
        @InjectRepository(Invoice) private invoiceRepository: Repository<Invoice>
    ) {}


    @Get()
    findAll() {
        return this.invoiceRepository.find();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.invoiceRepository.findOne({ where: { id } });
    }
        

    
}




