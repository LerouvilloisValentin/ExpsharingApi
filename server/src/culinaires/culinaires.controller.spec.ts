import { Test, TestingModule } from '@nestjs/testing';
import { CulinairesController } from './culinaires.controller';

describe('CulinairesController', () => {
  let controller: CulinairesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CulinairesController],
    }).compile();

    controller = module.get<CulinairesController>(CulinairesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
