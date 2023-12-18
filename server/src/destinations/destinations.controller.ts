import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DestinationsService } from './destinations.service';
import { Destination } from './interfaces/destination.interface';
import { Observable } from 'rxjs';

@Controller('destinations')
export class DestinationsController {
    constructor(private readonly destinationsService : DestinationsService){}

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.destinationsService.findOne(id)
    }

    @Get()
    findAll(): Destination[]{
        return this.destinationsService.findAll();
    }

    @Post()
    createDestination(@Body() newDestination){
        this.destinationsService.create(newDestination)
    }
}
