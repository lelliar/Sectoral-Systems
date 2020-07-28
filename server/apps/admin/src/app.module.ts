import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';
import { MemberModule } from './member/member.module';
import { SignModule } from './sign/sign.module';
import { FeedbackModule } from './feedback/feedback.module';
import { MovieModule } from './movie/movie.module';
import { CommonModule } from 'apps/server/src/common/common.module';

@Module({
  imports: [ 
    CommonModule, 
    ArticleModule, 

      MemberModule, 
      SignModule,
     FeedbackModule,
    
     MovieModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
