import { prop } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'

export class Lunbo {
    @ApiProperty({ description:'轮播图' })
    @prop()
    img:string
}