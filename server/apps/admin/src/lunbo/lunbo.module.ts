import { Module } from '@nestjs/common';
import { LunboController } from './lunbo.controller';

@Module({
  controllers: [LunboController]
})
export class LunboModule {}
