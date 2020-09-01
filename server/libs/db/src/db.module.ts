import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose'
import { User } from './model/user.model';
import { Lunbo } from './model/lunbo.model';
import { Video } from './model/video.model';
import { Member } from './model/member.model';
import { Article } from './model/article.model';
import { Movie } from './model/movie.model';
import { Janzhi } from './model/jianzhi.model';
import { Comment } from './model/comment.model';
import { Practice } from './model/practice.model';
import { Category } from './model/category.model';
import { allCategory } from './model/allcategory.model';
import { allVideo } from './model/allvideo.model';

const models = TypegooseModule.forFeature([
  User,
  Lunbo,
  Video,
  Member,
  Article,
  Movie,
  Janzhi,
  Comment,
  Practice,
  Category,
  allCategory,
  allVideo
])

@Global()
@Module({
  imports:[
    TypegooseModule.forRootAsync({
      useFactory(){
        return{
          uri:process.env.DB,
          useNewUrlParser:true,
          useUnifiedTopology:true,
          useCreateIndex:true,
          useFindAndModify:true
        }
      }
    }),
    models
  ],
  providers: [DbService],
  exports: [DbService , models],
})
export class DbModule {}
