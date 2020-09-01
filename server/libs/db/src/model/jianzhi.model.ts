import { ApiProperty } from "@nestjs/swagger";
import { prop } from "@typegoose/typegoose";

export class Janzhi{
    @ApiProperty({ description:'名称' })
    @prop()
    name:string

    @ApiProperty({ description:'公司' })
    @prop()
    company:string

    @ApiProperty({ description:'工资' })
    @prop()
    money:string

    @ApiProperty({ description:'要求' })
    @prop()
    ask:string

    @ApiProperty({ description:'联系方式' })
    @prop()
    phone:string

    @ApiProperty({ description:'地址' })
    @prop()
    address:string

    @ApiProperty({ description:'描述' })
    @prop()
    description:string
}