import { ApiProperty } from "@nestjs/swagger";
import { prop, modelOptions, Ref } from "@typegoose/typegoose";
import { Category } from "./category.model";

@modelOptions({
    schemaOptions:{
        timestamps:true
    }
})

export class Video {
    @ApiProperty({ description:'名字' })
    @prop()
    name:string
    
    @ApiProperty({ description:'封面图' })
    @prop()
    cover:string

    @ApiProperty({ description:'视频' })
    @prop()
    video:string

    @ApiProperty({ description:'关联视频' })
    @prop({ ref:'Category' })
    Category:Ref<Category>
}