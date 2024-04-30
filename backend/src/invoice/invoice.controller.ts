import { Controller, Request, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { Invoice } from './invoice.model';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Post, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Role } from 'src/user/role.enums';

@Controller('invoice')
export class InvoiceController {

    @Post()
    create(@Body() invoice: Invoice) {
        return this.invoiceRepository.save(invoice);
    }
    constructor(
        @InjectRepository(Invoice) private invoiceRepository: Repository<Invoice>
    ) { }


    @UseGuards(AuthGuard('jwt'))
    @Get()
    findAll(@Request() request) {

        if (request.user.role === Role.ADMIN) {
            
        } else {
           console.log(request.user.id);
            return this.invoiceRepository.find({
                where: {
                    contract: {
                        user: {
                            id: request.user.id
                        }
                    }
                }
            });
        }

    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.invoiceRepository.findOne({ where: { id } });
    }

    @Get('filter-by-contract/:id')
    findByContractId(@Param('id', ParseIntPipe) id: number) {

        return this.invoiceRepository.findOne({
            where: {
                contract: {
                    id: id
                }
            }
        });
    }


}




