import { Test, TestingModule } from '@nestjs/testing';
import { JanzhiController } from './janzhi.controller';

describe('Janzhi Controller', () => {
  let controller: JanzhiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JanzhiController],
    }).compile();

    controller = module.get<JanzhiController>(JanzhiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
