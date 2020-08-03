import { InjectModel } from "nestjs-typegoose";
import { prop } from "@typegoose/typegoose";
import { ApiProperty } from "@nestjs/swagger";

export class Comment{
    @prop()
    @ApiProperty({ description:'评论内容' })
    content:string

    @prop()
    @ApiProperty({ description:'点赞量' })
    like:number
}