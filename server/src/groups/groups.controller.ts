import { Body, Controller, Get, Post } from '@nestjs/common';
import { GroupsService } from './groups.service';

@Controller('groups')
export class GroupsController {
    constructor(private readonly groupsService : GroupsService){}

    @Get()
    findAll(): any[]{
        return this.groupsService.findAll();
    }

    @Post()
    createGroup(@Body() newGroup){
        console.log("newgroup", newGroup)
        this.groupsService.create(newGroup)
    }
}
