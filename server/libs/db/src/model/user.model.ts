import { prop } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'
import { hashSync } from 'bcryptjs'

export class User{
    @ApiProperty({ description:'账号' })
    @prop()
    username:string
    @ApiProperty({ description:'密码' })
    @prop({
        select:false,
        get(val){
            return val
        },
        set(val){
            return val ? hashSync(val) : val
        }
    })
    password:string
}