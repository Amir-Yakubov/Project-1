import { Module } from '@nestjs/common';
import { ChatController } from '../controllers/chatController';
import { ChatService } from "../services/chat.service";
import { HttpModule } from "@nestjs/axios";
import { DynamoDBModule } from "./DynamoDBModule";

@Module({
  imports: [HttpModule, DynamoDBModule],
  controllers: [ChatController],
  providers: [ChatService],
})

export class AppModule {}
