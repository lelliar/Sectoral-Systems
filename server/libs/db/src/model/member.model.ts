import { prop } from "@typegoose/typegoose";
import { ApiProperty } from "@nestjs/swagger";

export class Member{
    @ApiProperty({ description:'姓名' })
    @prop()
    name:string
    @ApiProperty({ description:'头像' })
    @prop()
    head:string
    @ApiProperty({ description:'职位' })
    @prop()
    position:string
}