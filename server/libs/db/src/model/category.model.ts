import { prop } from "@typegoose/typegoose";
import { ApiProperty } from "@nestjs/swagger";

export class Category{
    @prop()
    @ApiProperty({ description:'分类名称' })
    categories:string
}