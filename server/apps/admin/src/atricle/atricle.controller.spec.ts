import { Test, TestingModule } from '@nestjs/testing';
import { AtricleController } from './atricle.controller';

describe('Atricle Controller', () => {
  let controller: AtricleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AtricleController],
    }).compile();

    controller = module.get<AtricleController>(AtricleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
