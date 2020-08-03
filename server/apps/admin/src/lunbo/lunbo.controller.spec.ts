import { Test, TestingModule } from '@nestjs/testing';
import { LunboController } from './lunbo.controller';

describe('Lunbo Controller', () => {
  let controller: LunboController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LunboController],
    }).compile();

    controller = module.get<LunboController>(LunboController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
