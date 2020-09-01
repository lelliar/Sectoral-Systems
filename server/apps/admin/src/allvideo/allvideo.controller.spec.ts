import { Test, TestingModule } from '@nestjs/testing';
import { AllvideoController } from './allvideo.controller';

describe('Allvideo Controller', () => {
  let controller: AllvideoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AllvideoController],
    }).compile();

    controller = module.get<AllvideoController>(AllvideoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
