import { Module } from '@nestjs/common';
import { AllvideoController } from './allvideo.controller';

@Module({
  controllers: [AllvideoController]
})
export class AllvideoModule {}
