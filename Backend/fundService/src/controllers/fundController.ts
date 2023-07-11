import {Controller, Get, Param} from '@nestjs/common';
import { ProvidentFundService } from "../services/provident-fund.service";
import {FUND_CLASSIFICATION_ENUM} from "../Enum/FUND_CLASSIFICATION_ENUM";
import {SUB_SPECIALIZATION_ENUM} from "../Enum/SUB_SPECIALIZATION_ENUM";
import {PensionService} from "../services/pensionService";
import {InsuranceService} from "../services/insuranceService";

@Controller('fund_service/')
export class FundController {
  constructor(
      private providenFundService: ProvidentFundService,
      private pensionService: PensionService,
      private insuranceService: InsuranceService
  ) {}

  @Get('education_fund/:specialization') // קרן השתלמות
  public async getEducationFund(@Param('specialization') specialization:string){
    return await this.providenFundService.getData(
      FUND_CLASSIFICATION_ENUM.EDUCATION_FUND, specialization);
  }

  @Get('provident_fund_for_investment/:specialization') // גמל להשקעה
  public async getProvidentFundForInvestment(@Param('specialization') specialization:string){
    return await this.providenFundService.getData(
      FUND_CLASSIFICATION_ENUM.PROVIDENT_FUND_FOR_INVESTMENT, specialization);
  }

  @Get('children_fund/:specialization') // חסכון לכל ילד
  public async getChildrenFund(@Param('specialization') specialization:string){
    return await this.providenFundService.getData(
      FUND_CLASSIFICATION_ENUM.CHILDREN_FUND, specialization);
  }

  @Get('provident_fund/:specialization') // גמל
  public async getProvidentFund(@Param('specialization') specialization:string){
    return await this.providenFundService.getData(
      FUND_CLASSIFICATION_ENUM.PROVIDENT_FUND, specialization);
  }

  @Get('pension_fund/:specialization') // פנסיה מקיפה חדשה
  public async getPensionFund(@Param('specialization') specialization:string){
    return await this.pensionService.getData(
      FUND_CLASSIFICATION_ENUM.PENSION_FUND, specialization);
  }

  @Get('complementary_pension_fund/:specialization') // פנסיה משלימה
  public async getComplementaryPensionFund(@Param('specialization') specialization:string){
    return await this.pensionService.getData(
      FUND_CLASSIFICATION_ENUM.COMPLEMENTARY_PENSION_FUND, specialization);
  }

  @Get('savings_policy/:specialization') // פוליסות חסכון
  public async getSavingsPolicy(@Param('specialization') specialization:string){
    return await this.insuranceService.getData(specialization);
  }
}
