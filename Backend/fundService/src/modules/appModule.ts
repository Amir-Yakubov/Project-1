import { Module } from '@nestjs/common';
import { HttpModule } from "@nestjs/axios";
import { DynamoDBModule } from "./DynamoDBModule";
import {FundController} from "../controllers/fundController";
import {ProvidentService} from "../services/providentService";
import {PensionService} from "../services/pensionService";
import {InsuranceService} from "../services/insuranceService";
import {GovAdapter} from "../adapters/govAdapter";
import {FundService} from "../services/fundService";

@Module({
  imports: [HttpModule, DynamoDBModule],
  controllers: [FundController],
  providers: [FundService, ProvidentService, PensionService, InsuranceService, GovAdapter],
})

export class AppModule {}
