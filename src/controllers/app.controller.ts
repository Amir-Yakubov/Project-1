import { Controller, Get } from '@nestjs/common';
import { GemelnetService } from "../services/GemelnetService";

@Controller()
export class AppController {
  constructor(private gemelnetService: GemelnetService) {}

  @Get('service/get_data')
  public async getGemelnetDataByApi(){
    return await this.gemelnetService.getGemelNetData();
  }
}
