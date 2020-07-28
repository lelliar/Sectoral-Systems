import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Lunbo } from '@libs/db/models/lunbo.model';
import { ApiOperation } from '@nestjs/swagger';

@Controller('member')
export class MemberController {
    constructor(@InjectModel(Me) private readonly model){}
    
}
