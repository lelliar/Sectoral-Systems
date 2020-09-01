import { prop, modelOptions } from "@typegoose/typegoose";
import { ApiProperty } from "@nestjs/swagger";

@modelOptions({
    schemaOptions:{
        timestamps:true
    }
})

export class Article{
    @ApiProperty({ description:'文章名称' })
    @prop()
    name:string

    @ApiProperty({ description:'作者' })
    @prop()
    writer:string

    @ApiProperty({ description:'图片' })
    @prop()
    cover:string

    @ApiProperty({ description:'文章内容' })
    @prop()
    content:string
}