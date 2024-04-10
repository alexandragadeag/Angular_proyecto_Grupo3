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
import { ProductController } from './product/product.controller';
import { Product } from './product/product.model';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { v4 as uuidv4 } from 'uuid';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtValidator } from './user/jwt.validator';

@Module({
  imports: [
    PassportModule, // módulo de autenticación
    JwtModule.register({
      secret: 'admin',
      signOptions: {expiresIn: '7d'}
    }),
    MulterModule.register({
      storage: diskStorage({
        // carpeta destino donde guardar los archivos
        destination: './uploads',
        // Opcional: generar un nombre único para el archivo antes de guardarlo:
        // 1f82d390-d902-4aed-ad23-d543f56f2433.png
        filename: (req, file, callback) => {
          let fileName = uuidv4() + extname(file.originalname);
          callback(null, fileName);
        }
      })
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', 
      port: 3306,
      username: 'root',
      password: 'admin1234',
      database: 'nest_helio', // crear esta base de datos en MySQL primero
      entities: [User, Budget, Contract, Invoice, Product],
      synchronize: true, // generar tablas en base de datos
      logging: true
    }),
    TypeOrmModule.forFeature([User, Budget, Contract, Invoice, Product]) // Esto permite acceder a Repository
    
  ],
  controllers: [AppController, UserController, BudgetController, ContractController, InvoiceController, ProductController],
  // Clase personalizada para validar y verificar token JWT
  providers: [AppService, JwtValidator],
})
export class AppModule 
{
  
}
