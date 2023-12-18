import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CulinairesService } from './culinaires.service';


@Controller('culinaires')
export class CulinairesController {
    constructor(private readonly culinairesService : CulinairesService){}

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.culinairesService.findOne(id)
    }

    @Get()
    findAll(): any[]{
        return this.culinairesService.findAll();
    }

    @Post()
    createCulinaire(@Body() newCulinaire){
        this.culinairesService.create(newCulinaire)
    }
}
