import { Controller, Get } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Article } from '@app/db/model/article.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiTags, ApiProperty, ApiOperation } from '@nestjs/swagger';

@Crud({
    model:Article
})
@Controller('atricle')
@ApiTags('文章')
export class AtricleController {
    constructor(@InjectModel(Article) private readonly model:ReturnModelType<typeof Article>){}
}
