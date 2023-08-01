import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ShorturlService } from './shorturl.service';
import { createUrl } from './dto/create-url.dto';
@Controller('/api/shorturl')
export class ShorturlController {
    constructor(private readonly service: ShorturlService) { }
    @Get()
    async index() {
        return this.service.findAll();
    }
    @Get(':link')
    async find(@Param('link') link: string) {
        return this.service.findOne(link);
    }
    @Post()
    async create(@Body() urlDto: createUrl) {
        return this.service.create(urlDto);
    }
}
