import { Module } from '@nestjs/common';
import { ShorturlController } from './shorturl.controller';
import { ShorturlService } from './shorturl.service';
import { UrlSchema } from './schema/url.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    controllers: [ShorturlController],
    providers: [ShorturlService],
    imports: [MongooseModule.forFeature([{ name: 'urls', schema: UrlSchema }])],
})
export class ShorturlModule { }
