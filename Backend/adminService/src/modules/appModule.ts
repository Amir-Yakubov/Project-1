import { Module } from '@nestjs/common';
import { AdminController } from '../controllers/adminController';
import { AdminService } from "../services/adminService";
import { HttpModule } from "@nestjs/axios";
import { DynamoDBModule } from "./DynamoDBModule";
import {AdaptersModule} from "./adaptersModule";
import {AuthModule} from "./authModule";
import {AuthService} from "../services/authService";
import {ConfigModule, ConfigService} from "@nestjs/config";

@Module({
  imports: [HttpModule, DynamoDBModule, AdaptersModule, AuthModule, ConfigModule.forRoot()],
  controllers: [AdminController],
  providers: [AdminService, AuthService, ConfigService],
})

export class AppModule {}
