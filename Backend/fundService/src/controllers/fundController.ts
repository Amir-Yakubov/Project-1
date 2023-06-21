import { Controller, Get } from '@nestjs/common';
import { FundService } from "../services/fundService";
import { FUND_CLASSIFICATION_ENUM } from "../Enum/FUND_CLASSIFICATION_ENUM";
import { SUB_SPECIALIZATION_ENUM } from "../Enum/SUB_SPECIALIZATION_ENUM";

@Controller('funds_service/')
export class FundController {
  constructor(private gemelnetService: FundService) {}

  @Get('heshtalmot_minayot')
  public async getHeshtalmotMinayot(){
    return await this.gemelnetService.getData(
      FUND_CLASSIFICATION_ENUM.HESHTALMOT, SUB_SPECIALIZATION_ENUM.MENAYOT);
  }

  @Get('heshtalmot_klali')
  public async getHeshtalmotKlali(){
    return await this.gemelnetService.getData(
      FUND_CLASSIFICATION_ENUM.HESHTALMOT, SUB_SPECIALIZATION_ENUM.KLALI);
  }

  @Get('heshtalmot_agah')
  public async getHeshtalmotAgah(){
    return await this.gemelnetService.getData(
      FUND_CLASSIFICATION_ENUM.HESHTALMOT, SUB_SPECIALIZATION_ENUM.AGAH);
  }
}
