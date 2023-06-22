import { Module } from '@nestjs/common';
import { UserController } from '../controllers/userController';
import { UserService } from "../services/userService";
import { HttpModule } from "@nestjs/axios";
import { DynamoDBModule } from "./DynamoDBModule";
import {AuthModule} from "./authModule";
import {AuthService} from "../services/authService";

@Module({
  imports: [HttpModule, DynamoDBModule, AuthModule],
  controllers: [UserController],
  providers: [UserService, AuthService],
})

export class AppModule {}
