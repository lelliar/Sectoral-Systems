import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { User } from '@app/db/model/user.model';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';

@Controller('user')
@ApiTags('用户')
export class UserController {
    constructor(@InjectModel(User) private readonly model:ReturnModelType<typeof User>){}
        @Get()
        @ApiOperation({ summary:'用户列表' })
        async index(){
            return await this.model.find()
        }

        @Get(':id')
        @ApiOperation({ summary:'查找用户' })
        async find( @Param('id') id:string){
            return await this.model.findById(id)
        }

        @Post()
        @ApiOperation({ summary:'添加用户' })
        async add(@Body() body:User){
            return await this.model.create(body)
        }

        @Put(':id')
        @ApiOperation({ summary:'更新用户' })
        async update(@Param('id') id:string , @Body() body:User){
            const res =  await this.model.findByIdAndUpdate(id , body)
            return {
                success:true
            }
        }

        @Delete(':id')
        @ApiOperation({ summary:'删除用户' })
        async remove(@Param('id') id:string){
            await this.model.findByIdAndDelete(id)
            return {
                success:true
            }
        }
}
