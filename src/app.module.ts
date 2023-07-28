import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShorturlController } from './shorturl/shorturl.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [MongooseModule.forRootAsync(), ConfigModule.forRoot()],
  controllers: [AppController, ShorturlController],
  providers: [AppService],
})
export class AppModule { }
