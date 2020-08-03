import { Test, TestingModule } from '@nestjs/testing';
import { PracticeController } from './practice.controller';

describe('Practice Controller', () => {
  let controller: PracticeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PracticeController],
    }).compile();

    controller = module.get<PracticeController>(PracticeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
