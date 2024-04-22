import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Contact } from './contact.model';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('contact')
export class ContactController {
    constructor 
    (
        @InjectRepository(Contact) private contactRepository: Repository<Contact>
    ) {}

    @Post()
    create(@Body() contact: Contact) {
        return this.contactRepository.save(contact);
    }

    @Get()
    findAll() {
        return this.contactRepository.find();

    }

    @Get('filter-by-id/:id')
    findById(@Param('id',ParseIntPipe) id: number) {
        return this.contactRepository.findOne({
            where: {
                id: id
            }
        });

    }
}


