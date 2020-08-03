import { ApiProperty } from "@nestjs/swagger";
import { prop } from "@typegoose/typegoose";

export class Lunbo {
    @ApiProperty({ description:'轮播图' })
    @prop()
    cover:string
}