import { Module } from '@nestjs/common';
import { AllcategoryController } from './allcategory.controller';

@Module({
  controllers: [AllcategoryController]
})
export class AllcategoryModule {}
