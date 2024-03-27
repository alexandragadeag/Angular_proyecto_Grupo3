import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user/user.controller';
import { User } from './user/user.model';
import { BudgetController } from './budget/budget.controller';
import { Budget } from './budget/budget.model';
import { ContractController } from './contract/contract.controller';
import { Contract } from './contract/contract.model';
import { InvoiceController } from './invoice/invoice.controller';
import { Invoice } from './invoice/invoice.model';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', 
      port: 3306,
      username: 'root',
      password: 'admin1234',
      database: 'nest_helio', // crear esta base de datos en MySQL primero
      entities: [User, Budget, Contract, Invoice],
      synchronize: true, // generar tablas en base de datos
      logging: true
    }),
    TypeOrmModule.forFeature([User, Budget, Contract, Invoice]) // Esto permite acceder a Repository
    
  ],
  controllers: [AppController, UserController, BudgetController, ContractController, InvoiceController, ],
  providers: [AppService],
})
export class AppModule 
{
  
}
