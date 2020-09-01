import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { LunboModule } from './lunbo/lunbo.module';
import { CommonModule } from '@app/common';
import { VideoModule } from './video/video.module';
import { MemberModule } from './member/member.module';
import { AtricleModule } from './atricle/atricle.module';
import { MoiveModule } from './moive/moive.module';
import { JanzhiModule } from './janzhi/janzhi.module';
import { CommentModule } from './comment/comment.module';
import { PracticeModule } from './practice/practice.module';
import { MulterModule } from '@nestjs/platform-express';
import { CategoryModule } from './category/category.module';
import { AllcategoryModule } from './allcategory/allcategory.module';
import { AllvideoModule } from './allvideo/allvideo.module';


const MAO = require('multer-aliyun-oss');

@Module({
  imports: [
    MulterModule.registerAsync({
      useFactory(){
        return{
          storage: MAO({
            config: {
                region: process.env.OSS_REGION,
                accessKeyId: process.env.OSS_ACCESS_KEY_ID,
                accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
                bucket: process.env.OSS_BUCKET
            }
          })
        }
      }
    }),
    UserModule , CommonModule, LunboModule, VideoModule, MemberModule, AtricleModule, MoiveModule, JanzhiModule, CommentModule, PracticeModule, CategoryModule, AllcategoryModule, AllvideoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
