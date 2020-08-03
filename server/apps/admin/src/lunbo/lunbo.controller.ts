import { Controller, Inject } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { Lunbo } from '@app/db/model/lunbo.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { Crud } from 'nestjs-mongoose-crud'

@Crud({
    model:Lunbo
})
@Controller('lunbo')
@ApiTags('轮播图')
export class LunboController {
    constructor(@InjectModel(Lunbo) private readonly model:ReturnModelType<typeof Lunbo>){}
}
