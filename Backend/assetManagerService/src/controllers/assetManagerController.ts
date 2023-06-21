import {Controller, Get, Param} from '@nestjs/common';
import { assetManagerService } from "../services/assetManagerService";

@Controller('asset_manager_service/')
export class AssetManagerController {
  constructor(private assetManagerService: assetManagerService) {}

  @Get('assets/:user_id')
  public async getUserAssets(@Param('user_id') user_id: string){
    return await this.assetManagerService.getUserAssets(user_id);
  }
}
