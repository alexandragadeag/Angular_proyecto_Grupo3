import { Controller } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Contact } from './contact.model';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('contact')
export class ContactController {
    constructor 
    (
        @InjectRepository(Contact) private contactRepository: Repository<Contact>
    ) {}
}