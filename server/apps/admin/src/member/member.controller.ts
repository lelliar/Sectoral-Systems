import { Controller } from '@nestjs/common';
import { Member } from '@app/db/model/member.model';
import { Crud } from 'nestjs-mongoose-crud'
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiTags } from '@nestjs/swagger';

@Crud({
    model:Member
})
@Controller('member')
@ApiTags('成员')
export class MemberController {
    constructor(@InjectModel(Member) private readonly model:ReturnModelType<typeof Member>){

    }
}
