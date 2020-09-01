import { prop, arrayProp, Ref, modelOptions } from "@typegoose/typegoose";
import { ApiProperty } from "@nestjs/swagger";
import { Video } from "./video.model";

@modelOptions({
    schemaOptions:{
        toJSON:{virtuals:true}
    }
})

export class Category{
    @prop()
    @ApiProperty({ description:'首页分类名称' })
    categories:string

    @arrayProp({
        ref:'Video',
        localField:'_id',
        foreignField:'Category'
    })
    video:Ref<Video>[]
}