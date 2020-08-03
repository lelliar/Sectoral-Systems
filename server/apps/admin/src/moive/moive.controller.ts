import { Controller } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Movie } from '@app/db/model/movie.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud';

@Crud({
    model:Movie
})

@Controller('moive')
@ApiTags('电影')
export class MoiveController {
    constructor(@InjectModel(Movie) private readonly model:ReturnModelType<typeof Movie>){}
}
