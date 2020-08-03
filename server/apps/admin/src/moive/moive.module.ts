import { Module } from '@nestjs/common';
import { MoiveController } from './moive.controller';

@Module({
  controllers: [MoiveController]
})
export class MoiveModule {}
