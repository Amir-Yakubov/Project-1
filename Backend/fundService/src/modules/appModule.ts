import { Module } from '@nestjs/common';
import { FundController } from '../controllers/fundController';
import { ProvidenFundService } from "../services/providenFundService";
import { HttpModule } from "@nestjs/axios";
import { DynamoDBModule } from "./DynamoDBModule";
import {PensionService} from "../services/pensionService";
import {InsuranceService} from "../services/insuranceService";

@Module({
  imports: [HttpModule, DynamoDBModule],
  controllers: [FundController],
  providers: [ProvidenFundService, PensionService, InsuranceService],
})

export class AppModule {}
