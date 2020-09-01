import { prop } from "@typegoose/typegoose";
import { ApiProperty } from "@nestjs/swagger";

export class Movie {
    @ApiProperty({ description:'电影名' })
    @prop()
    name:string

    @ApiProperty({ description:'描述' })
    @prop()
    description:string

    @ApiProperty({ description:'电影背景图' })
    @prop()
    cover:string
}