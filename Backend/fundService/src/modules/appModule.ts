import { Module } from '@nestjs/common';
import { FundController } from '../controllers/fundController';
import { ProvidentFundService } from "../services/provident-fund.service";
import { HttpModule } from "@nestjs/axios";
import { DynamoDBModule } from "./DynamoDBModule";
import {PensionService} from "../services/pensionService";
import {InsuranceService} from "../services/insuranceService";

@Module({
  imports: [HttpModule, DynamoDBModule],
  controllers: [FundController],
  providers: [ProvidentFundService, PensionService, InsuranceService],
})

export class AppModule {}
