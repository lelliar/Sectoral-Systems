import { Controller } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Comment } from '@app/db/model/comment.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiTags } from '@nestjs/swagger';

@Crud({
    model:Comment
})

@Controller('comment')
@ApiTags('评论')
export class CommentController {
    constructor(@InjectModel(Comment) private readonly model:ReturnModelType<typeof Comment>){

    }
}
