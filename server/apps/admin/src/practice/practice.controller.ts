import { Controller } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Practice } from '@app/db/model/practice.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud';

@Crud({
    model:Practice
})
@Controller('practice')
@ApiTags('实习')
export class PracticeController {
    constructor(@InjectModel(Practice) private readonly model:ReturnModelType<typeof Practice>){}
}
