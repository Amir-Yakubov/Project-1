import { Test, TestingModule } from '@nestjs/testing';
import { FundController } from '../src/controllers/fundController';
import { GemelService } from "../src/services/gemelService";

describe('AppController', () => {
  let appController: FundController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FundController],
      providers: [GemelService],
    }).compile();

    appController = app.get<FundController>(FundController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getGemelnetDataByApi()).toBeCalledTimes(1);
    });
  });
});
