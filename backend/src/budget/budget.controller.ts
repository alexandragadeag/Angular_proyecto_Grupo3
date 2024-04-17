import { Body, Controller, Get, Param, ParseIntPipe, Post} from '@nestjs/common';
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

    @Get()
    findAll() {
        return this.budgetRepository.find(); // Equivalente al SELECT * FROM
    }

    @Get('filter-by-id/:id') // :id es una variable, parámetro en la url
    findById( @Param('id', ParseIntPipe) id: number ) {
        return this.budgetRepository.findOne({
            // relations: {
            //    user: true
            // },
            where: {
                id: id
            }
        });
    }

     

}
