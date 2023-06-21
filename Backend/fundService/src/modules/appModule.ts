import { Module } from '@nestjs/common';
import { FundController } from '../controllers/fundController';
import { GemelService } from "../services/gemelService";
import { HttpModule } from "@nestjs/axios";
import { DynamoDBModule } from "./DynamoDBModule";

@Module({
  imports: [HttpModule, DynamoDBModule],
  controllers: [FundController],
  providers: [GemelService],
})

export class AppModule {}
