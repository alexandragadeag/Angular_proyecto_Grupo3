import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user/user.controller';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', 
      port: 3306,
      username: 'root',
      password: 'admin1234',
      database: 'nest_helio', // crear esta base de datos en MySQL primero
      entities: [],
      synchronize: true, // generar tablas en base de datos
      logging: true
    }),
    TypeOrmModule.forFeature([]) // Esto permite acceder a Repository
    
  ],
  controllers: [AppController, UserController,  ],
  providers: [AppService],
})
export class AppModule 
{
  
}
