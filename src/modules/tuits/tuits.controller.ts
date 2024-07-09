/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { TuitsService } from './tuits.service';
import { Tuit } from './tuit.entity';

@Controller('tuits')
export class TuitsController {
    constructor(private readonly tuitService: TuitsService){}

    @Get()
    getTuits(): Tuit[] {
        return this.tuitService.getTuits();
    }

    @Get(':id')
    getTuit(@Param('id') id: string): Tuit{
        const tuit = this.tuitService.getTuit(id);
        if (!tuit) {
            throw new NotFoundException("Resource not found");
        }
        return tuit;
    }

    @Post()
    createTuit(@Body('message') message: string): void {
        return this.tuitService.createTuit(message);
    }

    @Patch(':id')
    updateTuit(@Param('id') id: string, @Body('message') tuit): Tuit {
        return this.tuitService.updateTuit(id, tuit);
    }

    @Delete(':id')
    removeTuit(@Param('id') id: string): void {
        return this.tuitService.removeTuit(id);
    }
}
