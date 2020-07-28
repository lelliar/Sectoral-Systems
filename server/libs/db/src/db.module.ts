import { Module } from '@nestjs/common';
import { DbService } from './db.service';
import  { TypegooseModule } from 'nestjs-typegoose'
import { ConfigModule } from '@nestjs/config'
import { Lunbo } from './models/lunbo.model';

const models = TypegooseModule.forFeature([Lunbo])

@Module({
  imports:[
    TypegooseModule.forRoot('mongodb://localhost/jyb' , {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true,
        useFindAndModify:true
    }),
    models
  ],
  providers: [DbService],
  exports: [DbService , models],
})
export class DbModule {
  
}
