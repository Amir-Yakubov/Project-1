import { Module } from '@nestjs/common';
import { UserController } from '../controllers/userController';
import { UserService } from "../services/user.service";
import { HttpModule } from "@nestjs/axios";
import { DynamoDBModule } from "./DynamoDBModule";

@Module({
  imports: [HttpModule, DynamoDBModule],
  controllers: [UserController],
  providers: [UserService],
})

export class AppModule {}
