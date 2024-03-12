import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user/user.controller';
import { User } from './user/user.model';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', 
      port: 3306,
      username: 'root',
      password: 'admin1234',
      database: 'nest_helio', // crear esta base de datos en MySQL primero
      entities: [User],
      synchronize: true, // generar tablas en base de datos
      logging: true
    }),
    TypeOrmModule.forFeature([User]) // Esto permite acceder a Repository
    
  ],
  controllers: [AppController, UserController, ],
  providers: [AppService],
})
export class AppModule 
{
  
}
