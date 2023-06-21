import { Test, TestingModule } from '@nestjs/testing';
import { AssetManagerController } from '../src/controllers/assetManagerController';
import { assetManagerService } from "../src/services/assetManagerService";

describe('AppController', () => {
  let appController: AssetManagerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AssetManagerController],
      providers: [assetManagerService],
    }).compile();

    appController = app.get<AssetManagerController>(AssetManagerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getGemelnetDataByApi()).toBeCalledTimes(1);
    });
  });
});
