import { Test, TestingModule } from '@nestjs/testing';
import { ContractFormController } from './contract-form.controller';

describe('ContractFormController', () => {
  let controller: ContractFormController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContractFormController],
    }).compile();

    controller = module.get<ContractFormController>(ContractFormController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
