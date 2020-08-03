import { Module, Global } from '@nestjs/common';
import { CommonService } from './common.service';
import { ConfigModule } from '@nestjs/config'
import { DbModule } from '@app/db';
import { JwtModule } from '@nestjs/jwt'

@Global()
@Module({
  imports:[
    ConfigModule.forRoot({
      isGlobal:true
    }),
    JwtModule.registerAsync({
      useFactory(){
        return {
          secret:process.env.SECERT
        }
      }
    }),
    DbModule
  ],
  providers: [CommonService],
  exports: [CommonService],
})
export class CommonModule {}
