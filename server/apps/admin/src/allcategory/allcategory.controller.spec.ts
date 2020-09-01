import { Test, TestingModule } from '@nestjs/testing';
import { AllcategoryController } from './allcategory.controller';

describe('Allcategory Controller', () => {
  let controller: AllcategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AllcategoryController],
    }).compile();

    controller = module.get<AllcategoryController>(AllcategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
