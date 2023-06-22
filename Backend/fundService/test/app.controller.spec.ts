import { Test, TestingModule } from '@nestjs/testing';
import { FundController } from '../src/controllers/fundController';
import { ProvidenFundService } from "../src/services/providenFundService";

describe('AppController', () => {
  let appController: FundController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FundController],
      providers: [ProvidenFundService],
    }).compile();

    appController = app.get<FundController>(FundController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getGemelnetDataByApi()).toBeCalledTimes(1);
    });
  });
});
