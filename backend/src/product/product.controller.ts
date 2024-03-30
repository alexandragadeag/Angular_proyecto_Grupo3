import { Body, Controller, Get, NotFoundException, Param, ParseFloatPipe, ParseIntPipe, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThanOrEqual, Repository } from 'typeorm';
import { Product } from './product.model';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('product')
export class ProductController {
    constructor(
        @InjectRepository(Product) private productRepo: Repository<Product>
    ) {}

    @Get()
    findAll() {
        return this.productRepo.find();
    }

    @Get(':id')
    findById(@Param('id', ParseIntPipe) id: number) {

        return this.productRepo.findOne({
            where: {
                id: id
            }
        });
    }


    @Get('filter-by-price/:price')
    findBySalary(@Param('price', ParseFloatPipe) price: number ) {

        return this.productRepo.find({
            where: {
                // coincidencia exacta
                // price: price

                // mayor o igual:
                price: MoreThanOrEqual(price)
            },
            order: {
                price: "DESC"
            }
        });
    }

    // npm i -D @types/multer
    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async create(@UploadedFile() file: Express.Multer.File, @Body() product: Product) {

        if (file) {
            // guardar el archivo y obtener la url
            product.photoUrl = file.filename;
        }
        
        console.log(product);
        return await this.productRepo.save(product);
    }


    @Put(':id')
    @UseInterceptors(FileInterceptor('file'))
    async update(
        @UploadedFile() file: Express.Multer.File,
        @Param('id', ParseIntPipe) id:number,
        @Body() product: Product
        ) {
            

        if(!await this.productRepo.existsBy({id: id})) {
            throw new NotFoundException('Product not found');
        }

        if (file) {
            // guardar el archivo y obtener la url
            product.photoUrl = file.filename;
        }
        product.id = id; //Asigna el id para asegurar que sea numérico y actualize en lugar de intentar insertar 
        return await this.productRepo.save(product);
    }
}
