import { Controller } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Video } from '@app/db/model/video.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud'

@Crud({
    model:Video
})
@Controller('video')
@ApiTags('视频')
export class VideoController {
    constructor(@InjectModel(Video) private readonly model:ReturnModelType<typeof Video>){}
}
