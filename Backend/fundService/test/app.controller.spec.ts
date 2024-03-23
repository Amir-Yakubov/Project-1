import { Test, TestingModule } from '@nestjs/testing';
import { FundController } from '../src/controllers/fundController';
import { ProvidentService } from "../src/services/providentService";

describe('AppController', () => {
  let appController: FundController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FundController],
      providers: [ProvidentService],
    }).compile();

    appController = app.get<FundController>(FundController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
    });
  });
});
