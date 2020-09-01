import { ApiProperty } from "@nestjs/swagger";
import { prop, modelOptions, Ref } from "@typegoose/typegoose";
import { Category } from "./category.model";
import { allCategory } from "./allcategory.model";

@modelOptions({
    schemaOptions:{
        timestamps:true
    }
})

export class allVideo {
    @ApiProperty({ description:'名字' })
    @prop()
    name:string

    @ApiProperty({ description:'描述' })
    @prop()
    description:string
    
    
    @ApiProperty({ description:'封面图' })
    @prop()
    cover:string

    @ApiProperty({ description:'视频' })
    @prop()
    video:string

    @ApiProperty({ description:'关联视频' })
    @prop({ ref:'allCategory' })
    Category:Ref<allCategory>
}