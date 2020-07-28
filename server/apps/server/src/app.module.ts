import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [AdminModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
