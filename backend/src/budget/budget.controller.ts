import { Body, Controller, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Budget } from './budget.model';
import { Repository } from 'typeorm';

@Controller('budget')
export class BudgetController {

    constructor(
        @InjectRepository(Budget) private budgetRepository: Repository<Budget>
    ) {}
    
    //findall

    // find by id

    // find by user id

    //create
    @Post()
    create(@Body() budget: Budget) {
        return this.budgetRepository.save(budget);
    }

}
