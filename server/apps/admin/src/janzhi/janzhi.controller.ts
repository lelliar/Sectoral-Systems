import { Controller } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Janzhi } from '@app/db/model/jianzhi.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiTags } from '@nestjs/swagger';

@Crud({
    model:Janzhi
})

@Controller('jianzhi')
@ApiTags('兼职')
export class JanzhiController {
    constructor(@InjectModel(Janzhi) private readonly model:ReturnModelType<typeof Janzhi>){}
}
