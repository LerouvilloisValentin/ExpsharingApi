import { Test, TestingModule } from '@nestjs/testing';
import { CulinairesService } from './culinaires.service';

describe('CulinairesService', () => {
  let service: CulinairesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CulinairesService],
    }).compile();

    service = module.get<CulinairesService>(CulinairesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
