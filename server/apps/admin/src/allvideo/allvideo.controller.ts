import { Controller } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { allVideo } from '@app/db/model/allvideo.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud';

@Crud({
    model:allVideo
})
@Controller('allvideo')
@ApiTags('所有视频')
export class AllvideoController {
    constructor(@InjectModel(allVideo) private readonly model:ReturnModelType<typeof allVideo>){}
}
