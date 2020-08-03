import { Test, TestingModule } from '@nestjs/testing';
import { MoiveController } from './moive.controller';

describe('Moive Controller', () => {
  let controller: MoiveController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoiveController],
    }).compile();

    controller = module.get<MoiveController>(MoiveController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
