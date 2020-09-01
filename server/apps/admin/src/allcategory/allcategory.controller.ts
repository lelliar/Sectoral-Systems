import { Controller, Get } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { allCategory } from '@app/db/model/allcategory.model';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud';

@Crud({
    model:allCategory
})

@Controller('allcategory')
@ApiTags('所有分类')
export class AllcategoryController {
    constructor(@InjectModel(allCategory) private readonly model){}
    @Get('a')
    @ApiOperation({ summary:'关联取出' })
    async index(){
        return await this.model.find().populate('video').lean()
    }
}
