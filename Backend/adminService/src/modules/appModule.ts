import { Module } from '@nestjs/common';
import { AdminController } from '../controllers/adminController';
import { AdminService } from "../services/adminService";
import { HttpModule } from "@nestjs/axios";
import { DynamoDBModule } from "./DynamoDBModule";

@Module({
  imports: [HttpModule, DynamoDBModule],
  controllers: [AdminController],
  providers: [AdminService],
})

export class AppModule {}
