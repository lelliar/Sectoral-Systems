import { prop, arrayProp, Ref } from "@typegoose/typegoose";
import { ApiProperty } from "@nestjs/swagger";
import { allVideo } from "./allvideo.model";

export class allCategory{
    @prop()
    @ApiProperty({ description:'分类名称' })
    categories : string

    @arrayProp({
        ref:'allVideo',
        localField:'_id',
        foreignField:'Category'
    })
    video:Ref<allVideo>[]
}