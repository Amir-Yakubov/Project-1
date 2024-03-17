import { Test, TestingModule } from '@nestjs/testing';
import { FundController } from '../src/controllers/fundController';
import { ProvidentFundService } from "../src/services/providentFundService";

describe('AppController', () => {
  let appController: FundController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FundController],
      providers: [ProvidentFundService],
    }).compile();

    appController = app.get<FundController>(FundController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
    });
  });
});
