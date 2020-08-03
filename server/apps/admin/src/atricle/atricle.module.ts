import { Module } from '@nestjs/common';
import { AtricleController } from './atricle.controller';

@Module({
  controllers: [AtricleController]
})
export class AtricleModule {}
