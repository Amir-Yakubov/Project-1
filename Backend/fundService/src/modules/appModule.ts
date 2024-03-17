import { Module } from '@nestjs/common';
import { FundController } from '../controllers/fundController';
import { ProvidentFundService } from "../services/providentFundService";
import { HttpModule } from "@nestjs/axios";
import { DynamoDBModule } from "./DynamoDBModule";
import {PensionService} from "../services/pensionService";
import {InsuranceService} from "../services/insuranceService";
import {FundService} from "../services/fundService";

@Module({
  imports: [HttpModule, DynamoDBModule],
  controllers: [FundController],
  providers: [ProvidentFundService, PensionService, InsuranceService, FundService],
})

export class AppModule {}
