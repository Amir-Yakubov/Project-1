import {Controller, Get, Param} from '@nestjs/common';
import { GemelService } from "../services/gemelService";
import {FUND_CLASSIFICATION_ENUM} from "../Enum/FUND_CLASSIFICATION_ENUM";
import {SUB_SPECIALIZATION_ENUM} from "../Enum/SUB_SPECIALIZATION_ENUM";

@Controller('fund_service/')
export class FundController {
  constructor(private gemelService: GemelService) {}

  @Get('education_fund/:specialization')
  public async getEducationFund(@Param('specialization') specialization:string){
    return await this.gemelService.getData(
      FUND_CLASSIFICATION_ENUM.EDUCATION_FUND, specialization);
  }

  @Get('provident_fund/:specialization')
  public async getProvidentFund(@Param('specialization') specialization:string){
    return await this.gemelService.getData(
      FUND_CLASSIFICATION_ENUM.PROVIDENT_FUND, specialization);
  }

  @Get('children_fund/:specialization')
  public async getChildrenFund(@Param('specialization') specialization:string){
    return await this.gemelService.getData(
      FUND_CLASSIFICATION_ENUM.CHILDREN_FUND, specialization);
  }
}
