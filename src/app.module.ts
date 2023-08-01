import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ShorturlModule } from './shorturl/shorturl.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO'),
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot(),
    ShorturlModule,
  ],
})
export class AppModule { }
