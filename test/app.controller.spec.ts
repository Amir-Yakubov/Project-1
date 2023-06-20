import { Test, TestingModule } from '@nestjs/testing';
import { FundController } from '../src/controllers/fundController';
import { FundService } from "../src/services/fundService";

describe('AppController', () => {
  let appController: FundController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FundController],
      providers: [FundService],
    }).compile();

    appController = app.get<FundController>(FundController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getGemelnetDataByApi()).toBeCalledTimes(1);
    });
  });
});
