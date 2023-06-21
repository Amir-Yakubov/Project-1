import { Module } from '@nestjs/common';
import { FundController } from '../controllers/fundController';
import { FundService } from "../services/fundService";
import { HttpModule } from "@nestjs/axios";
import { DynamoDBModule } from "./DynamoDBModule";

@Module({
  imports: [HttpModule, DynamoDBModule],
  controllers: [FundController],
  providers: [FundService],
})

export class AppModule {}
