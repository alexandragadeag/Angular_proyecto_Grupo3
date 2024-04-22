import { Body, Request, Controller, Get, Param, ParseIntPipe, Post, UseGuards, UnauthorizedException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Budget } from './budget.model';
import { Repository } from 'typeorm';
import { AuthGuard } from '@nestjs/passport';
import { Role } from 'src/user/role.enums';



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

    @UseGuards(AuthGuard('jwt'))
    @Get('filter-by-current-user')
    findByCurrentUserId(@Request() request) {

        if (request.user.role === Role.ADMIN) {
            return this.budgetRepository.find();
        } else {
           console.log(request.user.id);
            throw new UnauthorizedException();
        }

    }

     

}
