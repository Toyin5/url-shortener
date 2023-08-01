import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Url } from './schema/url.schema';
import { createUrl } from './dto/create-url.dto';

@Injectable()
export class ShorturlService {
    constructor(@InjectModel('urls') private UrlModel: Model<Url>) { }

    async create(createUrl: createUrl): Promise<Url> {
        const newUrl = new this.UrlModel(createUrl);
        return newUrl.save();
    }

    async findAll(): Promise<Url[]> {
        return this.UrlModel.find().exec();
    }

    async findOne(link: string): Promise<Url> {
        return this.UrlModel.findOne({ _id: link }).exec()
    }
}
