import { Test, TestingModule } from '@nestjs/testing';
import { ChatController } from '../src/controllers/chatController';
import { ChatService } from "../src/services/chat.service";

describe('AppController', () => {
  let appController: ChatController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ChatController],
      providers: [ChatService],
    }).compile();

    appController = app.get<ChatController>(ChatController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getGemelnetDataByApi()).toBeCalledTimes(1);
    });
  });
});
