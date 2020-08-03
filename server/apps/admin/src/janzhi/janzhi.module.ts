import { Module } from '@nestjs/common';
import { JanzhiController } from './janzhi.controller';

@Module({
  controllers: [JanzhiController]
})
export class JanzhiModule {}
